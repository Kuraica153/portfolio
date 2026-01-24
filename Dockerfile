# Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the app
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma client and build
RUN pnpm prisma generate && pnpm build

# Run the app (minimal standalone image)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Don't run as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Install pnpm for running migrations
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files (needed for pnpm prisma commands)
COPY --chown=nextjs:nodejs package.json pnpm-lock.yaml ./

# Install only production dependencies + prisma CLI + tools for seed-admin
RUN pnpm install --prod --frozen-lockfile && \
    pnpm add prisma @prisma/adapter-pg pg bcryptjs tsx dotenv

# Copy Prisma schema and migrations
COPY --chown=nextjs:nodejs prisma ./prisma
COPY --chown=nextjs:nodejs prisma.config.ts ./

# Copy scripts (for seed-admin)
COPY --chown=nextjs:nodejs scripts ./scripts

# Copy generated Prisma client
COPY --from=builder --chown=nextjs:nodejs /app/lib/generated ./lib/generated

# Copy Next.js standalone output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy entrypoint script
COPY --chown=nextjs:nodejs docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Use entrypoint to run migrations before starting
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["node", "server.js"]

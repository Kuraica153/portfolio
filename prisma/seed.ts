import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Note: Better Auth handles password hashing internally
  // You'll need to create your admin user via the sign-up flow or use Better Auth's API
  
  console.log("Database seeded successfully!");
  console.log("\nTo create an admin user, you can:");
  console.log("1. Use the sign-up endpoint with a POST request to /api/auth/sign-up/email");
  console.log("2. Or run: pnpm tsx scripts/create-admin.ts");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

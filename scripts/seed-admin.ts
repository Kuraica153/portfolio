import "dotenv/config";
import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Better Auth uses bcrypt for password hashing
async function hashPassword(password: string): Promise<string> {
  // Dynamic import to handle ESM
  const { hash } = await import("bcryptjs");
  return hash(password, 10);
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const ADMIN_NAME = process.env.ADMIN_NAME || "Admin";

// Validate required environment variables
if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error("Error: ADMIN_EMAIL and ADMIN_PASSWORD environment variables are required.");
  console.error("\nUsage:");
  console.error("  ADMIN_EMAIL=you@example.com ADMIN_PASSWORD=securepass pnpm seed-admin");
  process.exit(1);
}

async function seedAdmin() {
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  });
  
  const prisma = new PrismaClient({ adapter });

  console.log("Seeding admin user...");
  console.log(`Email: ${ADMIN_EMAIL}`);
  console.log(`Name: ${ADMIN_NAME}`);

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: ADMIN_EMAIL },
    });

    if (existingUser) {
      console.log("\nAdmin user already exists!");
      console.log("User ID:", existingUser.id);
      return;
    }

    // Hash the password
    const hashedPassword = await hashPassword(ADMIN_PASSWORD);

    // Create the user
    const user = await prisma.user.create({
      data: {
        name: ADMIN_NAME,
        email: ADMIN_EMAIL,
        emailVerified: true,
      },
    });

    // Create the credential account (Better Auth stores password in Account table)
    await prisma.account.create({
      data: {
        userId: user.id,
        accountId: user.id,
        providerId: "credential",
        password: hashedPassword,
      },
    });

    console.log("\nAdmin user created successfully!");
    console.log("User ID:", user.id);
    console.log("\nYou can now log in at /admin/login");
  } catch (error) {
    console.error("\nFailed to create admin user:");
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedAdmin();

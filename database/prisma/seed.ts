import {
  PhoneNumberCreateWithoutContactInput,
  PrismaClient,
} from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(
  number: PhoneNumberCreateWithoutContactInput["number"]
) {
  try {
    await prisma.user.create({
      data: {
        contact: {
          create: {
            phoneNumber: {
              create: {
                number,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}

for (const phoneNumber of ["+50212345642", "+50212345621"]) {
  createUser(phoneNumber);
}

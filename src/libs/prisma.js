//con esto se conecta a la bd que habiamos creado antes con prisma
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
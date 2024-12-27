"use server";

import { Prisma } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";

import { db } from "../_lib/prisma";
import { addTransactionSchema } from "./schema";

export const addTransaction = async (
  params: Omit<Prisma.TransactionCreateInput, "userId">,
) => {
  addTransactionSchema.parse(params);
  const { userId } = await auth();

  if (!userId) throw new Error("You  unauthorized");
  await db.transaction.create({
    data: { ...params, userId },
  });
};

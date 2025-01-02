"use server";

import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { revalidatePath } from "next/cache";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";

import { addTransactionSchema } from "./schema";

interface AddTransactionParams {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const addTransaction = async (params: AddTransactionParams) => {
  //validar campos pq depois vira uma chamada http
  addTransactionSchema.parse(params);

  const { userId } = await auth();
  console.log(userId);
  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transaction.create({
    data: { ...params, userId },
  });
  revalidatePath("/transactions");
};
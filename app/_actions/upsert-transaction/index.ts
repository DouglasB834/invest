"use server";

import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { revalidatePath } from "next/cache";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";

import { upsertTransactionSchema } from "./schema";

interface UpsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: UpsertTransactionParams) => {
  //validar campos pq depois vira uma chamada http
  upsertTransactionSchema.parse(params);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transaction.upsert({
    update: { ...params, userId },
    create: { ...params, userId },
    where: {
      id: params?.id ?? "",
    },
  });
  revalidatePath("/transactions");
};

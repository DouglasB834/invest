import { redirect } from "next/navigation";
import React from "react";

import { auth } from "@clerk/nextjs/server";

import { DataTable } from "../_components/ui/data-table";
import { AddTransationButton } from "../_components/add-transation-button";
import { Navbar } from "../_components/navbar";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_colunms";
import { ScrollArea } from "../_components/ui/scroll-area";

const TransactionPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });

  //composition pattern
  return (
    <>
      <Navbar />
      <div className="space-y-6 overflow-hidden p-6">
        {/* TÍTULO E BOTÃO */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransationButton />
        </div>
        <ScrollArea>
          <div className="h-full overflow-hidden">
            <DataTable columns={transactionColumns} data={transactions} />
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default TransactionPage;

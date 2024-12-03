import { ArrowDownUpIcon } from "lucide-react";
import React from "react";

import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transationsColumns } from "./_colunms";

const TransactionPage = async () => {
  const transation = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar transação <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transationsColumns} data={transation} />
      {/* {transation.map((transaction) => (
        <div key={transaction.id}>
          <h2>{transaction.name}</h2>
          <p>{transaction.category}</p>
          <p>{transaction.paymentMethod}</p>
        </div>
      ))} */}
    </div>
  );
};

export default TransactionPage;

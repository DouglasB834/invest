import React from "react";

import { DataTable } from "../_components/ui/data-table";
import { AddTransationButton } from "../_components/add-transation-button";
import { db } from "../_lib/prisma";
import { transationsColumns } from "./_colunms";

const TransactionPage = async () => {
  const transation = await db.transaction.findMany({});

  //composition pattern
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransationButton />
      </div>
      <DataTable
        columns={transationsColumns}
        data={JSON.parse(JSON.stringify(transation))} //converte antes de chagar aqui
      />
    </div>
  );
};

export default TransactionPage;

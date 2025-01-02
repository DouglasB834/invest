"use client";

import { PencilIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/app/_components/ui/button";
import { UpsertTransationDialog } from "@/app/_components/upsert-transation-dialog";
import { Transaction } from "@prisma/client";

interface EditTransationButtonProps {
  transaction: Transaction;
}

export const EditTransationButton = ({
  transaction,
}: EditTransationButtonProps) => {
  const [dialogIsOpen, setDialogeIsOpden] = useState(false);

  return (
    <>
      <Button
        onClick={() => setDialogeIsOpden(true)}
        variant={"ghost"}
        size={"icon"}
        className="text-primary-foreground"
      >
        <PencilIcon />
      </Button>
      <UpsertTransationDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogeIsOpden}
        defaultValues={{ ...transaction, amount: Number(transaction.amount) }}
      />
    </>
  );
};

"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "./ui/button";
import { UpsertTransationDialog } from "./upsert-transation-dialog";

export const AddTransationButton = () => {
  const [dialogIsOpen, setDialogeIsOpden] = useState(false);

  return (
    <>
      <Button className="rounded-full" onClick={() => setDialogeIsOpden(true)}>
        Adicionar transação <ArrowDownUpIcon />
      </Button>
      <UpsertTransationDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogeIsOpden}
      />
    </>
  );
};

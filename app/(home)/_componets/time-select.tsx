"use client";
import { useRouter } from "next/navigation";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";

const IMonthOptions = [
  // TODO: validar para nao mostrar meses que ainda nao passou
  { value: "01", label: "Jan" },
  { value: "02", label: "Feb" },
  { value: "03", label: "Mar" },
  { value: "04", label: "Apr" },
  { value: "05", label: "May" },
  { value: "06", label: "Jun" },
  { value: "07", label: "Jul" },
  { value: "08", label: "Aug" },
  { value: "09", label: "Sep" },
  { value: "10", label: "Oct" },
  { value: "11", label: "Nov" },
  { value: "12", label: "Dec" },
];

export const TimeSelect = () => {
  const { push } = useRouter();

  const handleSelectChange = (month: string) => {
    push(`/?month=${month}`);
  };

  return (
    <Select onValueChange={(value) => handleSelectChange(value)}>
      <SelectTrigger className="w-[125px] rounded-full">
        <SelectValue placeholder="Mes" />
      </SelectTrigger>

      <SelectContent>
        {IMonthOptions.map((option, index) => (
          <SelectItem key={index} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

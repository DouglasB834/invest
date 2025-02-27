import React, { ReactNode } from "react";

interface IPercentageItemProps {
  icon: ReactNode;
  title: string;
  value: number;
}

export const PercentageItem = ({
  icon,
  title,
  value,
}: IPercentageItemProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-white bg-opacity-10 p-1">{icon}</div>
          <span className="text-sm">{title}</span>
        </div>
        <span className="text-sm font-semibold">{value}%</span>
      </div>
    </div>
  );
};

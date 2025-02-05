import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_CATEGORY } from "@/app/_constants/transations";
import { ITotalExpensePerCategory } from "@/app/_data/get-dashboard/types";

interface IExpensePerCategoryProps {
  expensePerCategory: ITotalExpensePerCategory[];
}

const ExpensesPerCategory = ({
  expensePerCategory,
}: IExpensePerCategoryProps) => {
  return (
    <ScrollArea className="col-span-2 h-full rounded-md border pb-4">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Gasto por Categoria
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="mt-4 flex flex-col gap-2 space-y-5">
          {expensePerCategory.map((category) => (
            <li key={category.category} className="gap-4 space-y-2">
              <div className="flex w-full justify-between">
                <p className="text-sm font-semibold">
                  {TRANSACTION_CATEGORY[category.category]}
                </p>
                <span className="text-sm font-semibold">
                  {category.percentageTotal}%
                </span>
              </div>
              <Progress value={category.percentageTotal} />
            </li>
          ))}
        </ul>
      </CardContent>
    </ScrollArea>
  );
};

export default ExpensesPerCategory;

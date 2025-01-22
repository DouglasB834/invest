import { format, isMatch } from "date-fns";
import { redirect } from "next/navigation";

// import { auth } from "@clerk/nextjs/server";

import { Navbar } from "../_components/navbar";
import { getDashboard } from "../_data/get-dashboard";
import { SummaryCards } from "./_componets/summary-cards";
import { TimeSelect } from "./_componets/time-select";
import { TransactionPieChart } from "./_componets/transaction-pie-chart";

interface ISummaryMonthSelect {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: ISummaryMonthSelect) => {
  const monthIsInvalid: boolean = !month || !isMatch(month, "MM");
  // const { userId } = await auth();
  // if (!userId) {
  //   redirect("/login");
  // }
  // console.log(userId, "userId >>> ");

  if (monthIsInvalid) {
    const currentMonth = format(new Date(), "MM");
    redirect(`/?month=${currentMonth}`);
  }

  const dashboardData = await getDashboard(month);

  return (
    <div className="">
      <Navbar />
      <div className="space-y6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
      </div>

      <div className="grid h-full grid-cols-[2fr,1fr] gap-4 p-6">
        <SummaryCards month={month} {...dashboardData} />
      </div>

      <div className="grid grid-cols-3 grid-rows-1">
        <TransactionPieChart {...dashboardData} />
      </div>
    </div>
  );
};

export default Home;

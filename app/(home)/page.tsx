import { format, isMatch } from "date-fns";
import { redirect } from "next/navigation";

// import { auth } from "@clerk/nextjs/server";

import { Navbar } from "../_components/navbar";
import { SummaryCards } from "./_componets/summary-cards";
import { TimeSelect } from "./_componets/time-select";

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

  return (
    <div className="">
      <Navbar />
      <div className="space-y6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
      </div>
      <SummaryCards month={month} />
    </div>
  );
};

export default Home;

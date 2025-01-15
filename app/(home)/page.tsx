import { redirect } from "next/navigation";

import { auth } from "@clerk/nextjs/server";

import { Navbar } from "../_components/navbar";
import { SummaryCards } from "./_componets/summary-cards";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  console.log(userId, "userId >>> ");
  return (
    <div className="">
      <Navbar />
      <SummaryCards />
    </div>
  );
};

export default Home;

import { redirect } from "next/navigation";

import { auth } from "@clerk/nextjs/server";

import { Navbar } from "./_components/navbar";

const Home = async () => {
  const { userId } = auth();
  if (!userId) return redirect("/login");
  return (
    <div className="">
      <Navbar />
    </div>
  );
};

export default Home;

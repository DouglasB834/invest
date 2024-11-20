import { redirect } from "next/navigation";

import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const Home = async () => {
  const { userId } = auth();
  if (!userId) return redirect("/login");
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <UserButton showName />
    </div>
  );
};

export default Home;

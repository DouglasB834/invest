"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image
          src={"/logoTest.svg"}
          loading="lazy"
          width={173}
          height={37}
          alt="Invest"
          sizes="100vw"
        />
        <Link
          href={"/"}
          className={
            pathname == "/"
              ? "font-semibold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          className={
            pathname == "/transactions"
              ? "font-semibold text-primary"
              : "text-muted-foreground"
          }
          href={"/transactions"}
        >
          Transações
        </Link>
        <Link
          className={
            pathname == "/subscription"
              ? "font-semibold text-primary"
              : "text-muted-foreground"
          }
          href={"/subscription"}
        >
          Assinatura
        </Link>
      </div>
      {/* error ao renderizar usuario depois que carrega pagina  */}
      {isClient && <UserButton showName />}
    </nav>
  );
};

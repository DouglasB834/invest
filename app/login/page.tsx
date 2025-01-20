import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import { Button } from "../_components/ui/button";

const LoginPage = async () => {
  const { userId } = await auth();
  console.log(userId, "userId tem alguma coisa mta errada ");
  //JWT cannot be used prior to not before date claim (nbf).
  // Not before date: Mon, 20 Jan 2025 10:43:34 GMT; Current date: Mon, 20 Jan 2025 10:43:23 GMT;
  // (reason=token-not-active-yet, token-carrier=cookie)
  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      {/* btn de logar */}
      <div className="mx-auto flex max-w-[500px] flex-col justify-center p-8">
        <Image
          alt="Finance Ai"
          src="/logo.svg"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="mb-3 mt-12 text-3xl font-semibold leading-10">
          Bem-vindo
        </h1>
        <p className="mb-8 text-base text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant={"outline"}>
            <LogInIcon />
            Fazer login ou Criar conta
          </Button>
        </SignInButton>
      </div>

      <div className="relative">
        <Image
          alt="faça login"
          src="/login.png"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;

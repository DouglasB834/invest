import { LogInIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Button } from "../_components/ui/button";

const LoginPage = () => {
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
        <Button variant={"outline"}>
          <LogInIcon />
          Fazer login ou Criar conta
        </Button>
      </div>

      <div className="relative">
        {/* arrumar a igm começar o site */}
        <Image
          alt="faça login"
          src="/login.png"
          fill
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;

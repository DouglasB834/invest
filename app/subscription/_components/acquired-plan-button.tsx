"use client";
import { Button } from "@/app/_components/ui/button";
import React from "react";
import { createStripeCheckout } from "../_actions/create-checkout";
import { loadStripe } from "@stripe/stripe-js";

export const AcquiredPlanButton = () => {
  const handleAcquiredPlan = async () => {
    const { sessionId } = await createStripeCheckout();
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );

    if (!stripe) {
      throw new Error("stripe not found");
    }

    await stripe.redirectToCheckout({
      sessionId: sessionId!,
    });
  };

  return (
    <Button className="w-full rounded-full" onClick={handleAcquiredPlan}>
      Adquirir Plano
    </Button>
  );
};

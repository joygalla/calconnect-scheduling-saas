"use client";

import { useRouter } from "next/navigation";
import OnboardingForm from "@/components/OnboardingForm";
import RequireAuth from "@/components/RequireAuth";

export default function OnboardingPage() {
  const router = useRouter();

  const handleComplete = () => {
    router.push("/dashboard");
  };

  return (
    <RequireAuth>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Complete Your Onboarding</h1>
        <OnboardingForm onComplete={handleComplete} />
      </div>
    </RequireAuth>
  );
}
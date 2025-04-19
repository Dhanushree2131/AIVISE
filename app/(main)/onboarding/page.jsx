import { industries } from "@/data/industries";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation"; // Also make sure this is imported!
import OnboardingForm from "./_components/onboarding-form";// Ensure this is imported correctly

const OnboardingPage = async () => {
  // Check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
};

export default OnboardingPage;

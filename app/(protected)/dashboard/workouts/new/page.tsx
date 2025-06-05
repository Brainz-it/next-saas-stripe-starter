import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import { WorkoutSessionForm } from "@/components/forms/workout-session-form";

export const metadata = constructMetadata({
  title: "New Workout – SaaS Starter",
  description: "Create a new workout session.",
});

export default function NewWorkoutPage() {
  return (
    <>
      <DashboardHeader
        heading="New Workout Session"
        text="Create a new workout session."
      />
      <WorkoutSessionForm />
    </>
  );
}

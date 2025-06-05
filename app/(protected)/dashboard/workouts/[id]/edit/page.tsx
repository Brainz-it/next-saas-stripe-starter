import { constructMetadata } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/header";
import { WorkoutSessionForm } from "@/components/forms/workout-session-form";

export const metadata = constructMetadata({
  title: "Edit Workout – SaaS Starter",
  description: "Edit your workout session.",
});

interface EditWorkoutPageProps {
  params: { id: string };
}

export default function EditWorkoutPage({ params }: EditWorkoutPageProps) {
  return (
    <>
      <DashboardHeader
        heading="Edit Workout Session"
        text="Edit your workout session."
      />
      <WorkoutSessionForm />
    </>
  );
}

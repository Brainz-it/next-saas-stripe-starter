import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";

export default function NewWorkoutLoading() {
  return (
    <>
      <DashboardHeader
        heading="New Workout Session"
        text="Create a new workout session."
      />
      <Skeleton className="h-[500px] w-full rounded-lg" />
    </>
  );
}

import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";

export default function EditWorkoutLoading() {
  return (
    <>
      <DashboardHeader
        heading="Edit Workout Session"
        text="Edit your workout session."
      />
      <Skeleton className="h-[500px] w-full rounded-lg" />
    </>
  );
}

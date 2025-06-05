import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/components/dashboard/header";

export default function WorkoutsLoading() {
  return (
    <>
      <DashboardHeader
        heading="Workouts"
        text="Create and manage your workout sessions."
      />
      <Skeleton className="size-full rounded-lg" />
    </>
  );
}

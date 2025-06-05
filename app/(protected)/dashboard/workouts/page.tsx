import Link from "next/link";

import { constructMetadata } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "@/components/dashboard/header";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";

export const metadata = constructMetadata({
  title: "Workouts – SaaS Starter",
  description: "Create and manage your workout sessions.",
});

export default function WorkoutsPage() {
  return (
    <>
      <DashboardHeader
        heading="Workouts"
        text="Create and manage your workout sessions."
      >
        <Button asChild>
          <Link href="/dashboard/workouts/new">New Session</Link>
        </Button>
      </DashboardHeader>
      <EmptyPlaceholder>
        <EmptyPlaceholder.Icon name="post" />
        <EmptyPlaceholder.Title>No sessions created</EmptyPlaceholder.Title>
        <EmptyPlaceholder.Description>
          You don&apos;t have any workout sessions yet.
        </EmptyPlaceholder.Description>
        <Button asChild variant="outline">
          <Link href="/dashboard/workouts/new">Create Session</Link>
        </Button>
      </EmptyPlaceholder>
    </>
  );
}

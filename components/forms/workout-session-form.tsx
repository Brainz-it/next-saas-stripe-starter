"use client";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { workoutSessionSchema } from "@/lib/validations/workout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Icons } from "@/components/shared/icons";

export type WorkoutSessionFormData = z.infer<typeof workoutSessionSchema>;

interface WorkoutSessionFormProps {
  defaultValues?: WorkoutSessionFormData;
  onSubmit?: (data: WorkoutSessionFormData) => Promise<void> | void;
}

export function WorkoutSessionForm({
  defaultValues,
  onSubmit,
}: WorkoutSessionFormProps) {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WorkoutSessionFormData>({
    resolver: zodResolver(workoutSessionSchema),
    defaultValues: defaultValues ?? {
      title: "",
      description: "",
      date: "",
      duration: 30,
    },
  });

  function submit(data: WorkoutSessionFormData) {
    startTransition(async () => {
      if (onSubmit) {
        await onSubmit(data);
      }
      toast.success(defaultValues ? "Session updated" : "Session created");
      reset();
    });
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" {...register("title")}/>
        {errors.title && (
          <p className="px-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="date">Date</Label>
        <Input id="date" type="date" {...register("date")} />
        {errors.date && (
          <p className="px-1 text-sm text-red-600">{errors.date.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="duration">Duration (min)</Label>
        <Input id="duration" type="number" {...register("duration", { valueAsNumber: true })} />
        {errors.duration && (
          <p className="px-1 text-sm text-red-600">{errors.duration.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" rows={3} {...register("description")} />
        {errors.description && (
          <p className="px-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending && <Icons.spinner className="mr-2 size-4 animate-spin" />}
        {defaultValues ? "Save Changes" : "Create Session"}
      </Button>
    </form>
  );
}

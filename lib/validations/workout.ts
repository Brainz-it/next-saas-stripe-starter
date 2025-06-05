import * as z from "zod";

export const workoutSessionSchema = z.object({
  title: z.string().min(3).max(50),
  date: z.string(),
  duration: z.coerce.number().min(1).max(360),
  description: z.string().max(200).optional(),
});

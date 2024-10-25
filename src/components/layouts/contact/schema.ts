import z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must not exceed 50 characters" })
    .regex(/^[^\s].*[^\s]$/, {
      message: "Name cannot contain leading or trailing whitespace",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .min(5, { message: "Email must be at least 5 characters long" })
    .max(255, { message: "Email must not exceed 255 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(1000, { message: "Message must not exceed 1000 characters" })
    .trim(),
});

export type FormData = z.infer<typeof contactSchema>;

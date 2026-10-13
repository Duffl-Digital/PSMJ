import { z } from "zod";

export const ContactSchema = z.object({

  name: z
    .string()
    .trim()
    .min(1, { message: "Enter  name" })
    .min(3, { message: "Name must contain at least 3 characters" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Enter a valid name",
    }),

  email: z
    .string()
    .trim()
    .min(1, { message: "Enter  email id" })
    .email({ message: "Enter a valid email id" }),

  phone: z
    .string()
    .trim()
    .min(1, { message: "Enter  phone number" })
    .regex(/^[0-9]{10}$/, {
      message: "Enter a valid 10-digit phone number",
    }),

     whatsapp: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => {
        if (!value || value === "") return true;
        return /^[0-9]{10}$/.test(value);
      },
      {
        message: "Enter a valid 10-digit WhatsApp number",
      }
    ),

  subject: z
  .string()
  .trim()
  .min(1, { message: "Please select a service" })
  .refine(
    (value) =>
      ["Option 1", "Option 2", "Option 3"].includes(value),
    {
      message: "Invalid service selected",
    }
  ),
   

  message: z
    .string()
    .trim()
    .min(1, { message: "Enter your message" })
    .min(10, { message: "Message must be at least 10 characters" }),

});
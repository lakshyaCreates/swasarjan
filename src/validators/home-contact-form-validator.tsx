import { z } from "zod";

export const HomeContactFormValidator = z.object({
    firstName: z.string(),
    lastName: z.string(),
    company: z.string(),
    email: z.string().email(),
    country: z.string(),
    message: z.string(),
});

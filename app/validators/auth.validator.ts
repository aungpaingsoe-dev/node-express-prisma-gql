import { z } from "zod";

export const signInSchema = z.object({
  username: z.string().min(1, "Username is requried"),
  password: z.string().min(1, "Password is requried"),
});

export const signUpSchema = z
  .object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
    passwordConfirm: z.string().min(1, "Password confirm is required"),
  })
  .refine(
    ({ password, passwordConfirm }) => {
      return password === passwordConfirm;
    },
    {
      message: "Passwords don't match",
    }
  );

export type SignInInput = z.infer<typeof signInSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;

import { GraphQLError } from "graphql";
import { prisma } from "../../../prisma/client.js";
import {
  SignInInput,
  signInSchema,
  SignUpInput,
  signUpSchema,
} from "../../validators/auth.validator.js";
import { ZodError } from "zod";

const authResolver = {
  Query: {
    profile: () => {
      return {
        id: 1,
        username: "mgmg",
      };
    },
  },
  Mutation: {
    signIn: async (_: any, signInInput: SignInInput) => {
      try {
        signInSchema.parse(signInInput);

        const user = await prisma.user.findFirst({
          where: { username: signInInput.username },
        });

        if (!user) {
          throw new GraphQLError("User not found", {
            extensions: { code: "RECORD_NOT_FOUND" },
          });
        }

        return user;
      } catch (error) {
        if (error instanceof ZodError) {
          throw new GraphQLError("Validation Error", {
            extensions: {
              code: "VALIDATION_ERROR",
              details: error.errors,
              http: {
                status: 400,
              },
            },
          });
        }

        throw new GraphQLError("Internal Server Error", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
            http: {
              status: 500,
            },
          },
        });
      }
    },
    signUp: async (_: any, signUpInput: SignUpInput) => {
      try {
        signUpSchema.parse(signUpInput);
        const user = await prisma.user.create({
          data: {
            username: signUpInput.username,
            password: signUpInput.password,
            profile: {
              create: {
                dob: null,
                bio: null,
                gender: null,
              },
            },
          },
        });
        return user;
      } catch (error) {
        if (error instanceof ZodError) {
          throw new GraphQLError("Validation Error", {
            extensions: {
              code: "VALIDATION_ERROR",
              details: error.errors,
              http: {
                status: 400,
              },
            },
          });
        }

        throw new GraphQLError("Internal Server Error", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
            http: {
              status: 500,
            },
          },
        });
      }
    },
  },
};

export default authResolver;

import { GraphQLError, GraphQLType } from "graphql";
import { prisma } from "../../../prisma/client.js";

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
    signIn: async (
      _: any,
      signInInput: { username: string; password: string }
    ) => {
      const user = await prisma.user.findFirst({
        where: { username: signInInput.username },
      });

      if (!user) {
        throw new GraphQLError("User not found", {
          extensions: { code: "YOUR_ERROR_CODE" },
        });
      }

      return user;
    },
    signUp: async (
      parent: any,
      signUpInput: {
        username: string;
        password: string;
        passwordConfirm: string;
      }
    ) => {
      const user = await prisma.user.create({
        data: {
          username: signUpInput.username,
          password: signUpInput.password,
        },
      });
      return user;
    },
  },
};

export default authResolver;

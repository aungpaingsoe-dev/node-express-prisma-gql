import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
// Schemas
import userSchema from "./schemas/user.schema.js";
import authSchema from "./schemas/auth.schema.js";
import postSchema from "./schemas/post.schema.js";
import commentSchema from "./schemas/comment.schema.js";

// Resolvers
import userResolver from "./resolvers/user.resolver.js";
import authResolver from "./resolvers/auth.resolver.js";
import postResolver from "./resolvers/post.resolver.js";
import commentResolver from "./resolvers/comment.resolver.js";

export const typeDefs = mergeTypeDefs([
  userSchema,
  authSchema,
  postSchema,
  commentSchema,
]);
export const resolvers = mergeResolvers([
  userResolver,
  authResolver,
  postResolver,
  commentResolver,
]);

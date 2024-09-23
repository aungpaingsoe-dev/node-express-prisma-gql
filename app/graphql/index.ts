import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
// Schemas
import userSchema from './schemas/user.schema.js';
import authSchema from './schemas/auth.schema.js';

// Resolvers
import userResolver from './resolvers/user.resolver.js';
import authResolver from './resolvers/auth.resolver.js';

export const typeDefs = mergeTypeDefs([ userSchema, authSchema ]);
export const resolvers = mergeResolvers([ userResolver, authResolver ]);
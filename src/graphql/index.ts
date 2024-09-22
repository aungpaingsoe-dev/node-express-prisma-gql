import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import userSchema from './schemas/user.schema';
import userResolver from './resolvers/user.resolver';

export const typeDefs = mergeTypeDefs([ userSchema ]);
export const resolvers = mergeResolvers([ userResolver ]);
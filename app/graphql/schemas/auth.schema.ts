import { gql } from "graphql-tag";

const authSchema = gql`
  type Query {
    profile: User
  },

  type Mutation {
    signIn( signInInput: SignInInput! ) : User
    signUp( signUpInput: SignUpInput! ) : User
  }

  input SignInInput {
    username: String!
    password: String!
  }

  input SignUpInput {
    username: String!
    password: String!
    passwordConfirm: String!
  }
`;

export default authSchema;

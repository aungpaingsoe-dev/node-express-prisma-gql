import gql from "graphql-tag";

const userSchema = gql`
  type User {
    id: ID!
    username: String!
    password: String!
  }

  type Query {
    users: [User!]!
  }
`;

export default userSchema;

import gql from "graphql-tag";

const userSchema = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    users: [User!]!
  }
`;

export default userSchema;

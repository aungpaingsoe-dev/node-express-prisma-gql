import gql from "graphql-tag";

const userSchema = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    profile: Profile
  }

  type Profile {
    id: ID!
    dob: String
    bio: String
    gender: Gender
  }

  enum Gender {
    male
    female
  }

  type Query {
    users: [User!]!
  }
`;

export default userSchema;

import gql from "graphql-tag";

const postSchema = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    author: User
  }

  type Query {
    posts: [Post!]!
  }

`;

export default postSchema;

import gql from "graphql-tag";

const commentSchema = gql`
  type Comment {
    id: ID!
    post: Post!
    user: User!
    content: String!
  }

  type Query {
    getCommentById(userId: String): [Comment!]!
  }
`;

export default commentSchema;

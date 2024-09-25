const commentResolver = {
  Query: {
    getCommentById: (_: any, { userId }) => {
      return [
        {
          user: {
            id: 1,
            username: "mgmg",
          },
          post: {
            title: "post",
            content: "content",
          },
          id: 1,
          content: "Hello Post",
        },
        {
          user: {
            id: 1,
            username: "mgmg",
          },
          post: {
            title: "post",
            content: "content",
          },
          id: 2,
          content: "Hello Post",
        },
      ];
    },
  },
};

export default commentResolver;

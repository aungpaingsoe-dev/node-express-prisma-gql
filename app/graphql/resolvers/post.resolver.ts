const postResolver = {
  Query: {
    posts: () => {
      return {
        id: 1,
        title: "Post title",
        content: "Content",
        author: {
          id: 1,
          username: "mgmg",
        },
      };
    },
  },
};

export default postResolver;

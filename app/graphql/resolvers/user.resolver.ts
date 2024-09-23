const userResolver = {
  Query: {
    users: () => {
      return [
        {
          id: 1,
          username: "mg mg",
        },
      ];
    },
  },
};

export default userResolver;

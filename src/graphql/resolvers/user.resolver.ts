const userResolver = {
  Query: {
    users: () => {
      return [
        {
          id: 1,
          name: "mg mg",
        },
      ];
    },
  },
};

export default userResolver;

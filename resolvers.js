const users = [];

// GraphQL Resolvers
 const resolvers = {
    Query: {
      getUsers: () => users,
      getUser: (parent, { id }) => users.find((user) => user.id === id),
    },
    Mutation: {
      addUser: (parent, { name, email }) => {
        const newUser = { id: String(users.length + 1), name, email };
        users.push(newUser);
        return newUser;
      },
      updateUser: (parent, { id, name, email }) => {
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
          throw new Error('User not found');
        }
        users[userIndex] = { ...users[userIndex], name, email };
        return users[userIndex];
      },
      deleteUser: (parent, { id }) => {
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
          throw new Error('User not found');
        }
        const deletedUser = users.splice(userIndex, 1)[0];
        return deletedUser;
      },
    },
  };
  
  
  module.exports = { resolvers };

  
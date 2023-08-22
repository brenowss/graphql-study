import { ApolloServer, gql } from 'apollo-server';
import { randomUUID } from 'node:crypto';

interface User {
  id: string;
  name: string;
}

const users: User[] = [];

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    addUser(name: String!): User!
  }
`;

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: {
    Query: {
      users: () => users,
    },

    Mutation: {
      addUser: (_, args) => {
        const newUser = {
          id: randomUUID(),
          name: args.name,
        };

        users.push(newUser);

        return newUser;
      },
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

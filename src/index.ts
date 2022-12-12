import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Card {
    name: String!,
    age: Int!,
    company: String!,
    photo: String!,
  }

  type Query {
    cards: [Card!]!
  }

  type Subscription {
    cardAdded: Card!
  }
`;

const cards = [
  {
    name: "Elon Musk",
    age: 51,
    company: "Tesla, SpaceX, Twitter",
    photo:
      "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg",
  },
  {
    name: "Jeff Bezos",
    age: 58,
    company: "Amazon",
    photo:
      "https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg?crop=4:3",
  },
  {
    name: "Bill Gates",
    age: 67,
    company: "Microsoft",
    photo:
      "https://static01.nyt.com/images/2021/05/17/business/14altGates-print/14Gates--top-mediumSquareAt3X.jpg",
  },
  {
    name: "Mark Zuckerberg",
    age: 38,
    company: "Facebook, Meta",
    photo:
      "https://mastersofscale.com/wp-content/uploads/sites/2/2017/05/mark_zuckerberg.jpg",
  },
];

const resolvers = {
  Query: {
    cards: () => cards,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);

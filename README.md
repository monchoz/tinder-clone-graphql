# Tinder Clone API
This is a simple API that uses GraphQL and Node.js to serve information about Tinder cards. It allows clients to query the API for information about individual cards, such as their name, age, and interests, and it supports real-time updates using GraphQL subscriptions.

## Getting Started
To get started with the API, clone this repository and run the following commands:

```
npm install
npm start
```

This will start the API server on port 4000. You can then access the GraphQL endpoint at http://localhost:4000/graphql.

## API Reference
The API is based on the GraphQL schema language, and it exposes the following types and queries:

```
type Card {
  id: ID!
  name: String!
  age: Int!
  interests: [String!]!
}

type Query {
  cards: [Card!]!
  card(id: ID!): Card
}

type Subscription {
  cardAdded: Card!
}
```

You can use the cards query to fetch a list of all cards in the system, and the card query to fetch information about a specific card by its ID. The cardAdded subscription can be used to receive real-time notifications whenever a new card is added to the system.

Here are some example queries that you can run using the GraphiQL tool:

```
# Fetch a list of all cards
query {
  cards {
    id
    name
    age
    interests
  }
}

# Fetch information about a specific card
query {
  card(id: "123") {
    id
    name
    age
    interests
  }
}

# Subscribe to real-time updates
subscription {
  cardAdded {
    id
    name
    age
    interests
  }
}
```

For more detailed information about the API and its capabilities, please refer to the full schema definition in the schema.graphql file.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

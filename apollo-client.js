import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.org/swapi-graphql?query=%0A%20%20%20%20%7B%0A%20%20%20%20%20%20allPeople%20%7B%0A%20%20%20%20%20%20%20%20people%7B%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20hairColor%0A%20%20%20%20%20%20%20%20%20%20skinColor%0A%20%20%20%20%20%20%20%20%20%20eyeColor%0A%20%20%20%20%20%20%20%20%20%20gender%0A%20%20%20%20%20%20%20%20%20%20homeworld%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A",
  cache: new InMemoryCache(),
});

export default client;

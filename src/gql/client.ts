import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.graphcms.com/v2/cl3haveoc5wq401zdbd57d9w5/master",
  cache: new InMemoryCache(),
});

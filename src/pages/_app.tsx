import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";

import { AppProps } from "next/app";
import "@fontsource/raleway";
import "@fontsource/lato";
import "@fontsource/dejavu-mono";

import { theme } from "@qazalin/theme";
import { Layout } from "@qazalin/components";
import { client } from "@qazalin/gql";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;

import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "next-themes";

import { AppProps } from "next/app";
import "@fontsource/raleway";
import "@fontsource/lato";
import "@fontsource/dejavu-mono";

import { theme } from "@qazalin/theme";
import { Layout } from "@qazalin/components";
import { client } from "@qazalin/gql";
// import "highlight.js/styles/night-owl.css";
// import "highlight.js/styles/gradient-dark.css";
import "highlight.js/styles/tokyo-night-dark.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <ApolloProvider client={client}>
        <ChakraProvider resetCSS theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import "@fontsource/raleway";
import "@fontsource/lato";

import { theme } from "@qazalin/theme";
import { Layout } from "@qazalin/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;

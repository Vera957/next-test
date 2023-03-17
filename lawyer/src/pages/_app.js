/** @format */
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../components/Style.js";
import { Layout } from "@/components/Layout.js";
import Meta from "@/components/Meta.js";

export default function App({ Component, pageProps }) {
  return (
    <>
     <Meta/>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

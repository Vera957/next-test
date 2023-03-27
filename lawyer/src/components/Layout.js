/** @format */

"use client";

import { Header } from "./Header.js";
import { Box } from "@chakra-ui/react";
import Footer from "./Footer.js";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box h='100vh'
        as='main'
        maxW='1120px'
        ml='auto'
        mr='auto'
      >{children}</Box>
    </>
  );
};

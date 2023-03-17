/** @format */

"use client";

import { Header } from "./Header.js";
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box h='100vh' as='main'>{children}</Box>
    </>
  );
};

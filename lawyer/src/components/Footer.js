/** @format */

import { Container, Flex } from "@chakra-ui/react";
export default function Footer() {
  return (
    <>
      <Container
        as='footer'
        maxW='100vw'
        centerContent
        pos='fixed'
        bottom='0'
        zIndex='300'
        h={["50px"]}>
        <Flex
          w={["xs", "sm", "md", "4xl", "6xl"]}
          gridGap={[2, 4, 6]}
          p={[2, 4, 6]}
          color='brand.400'>
        </Flex>
      </Container>
    </>
  );
}

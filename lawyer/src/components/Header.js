/** @format */
import { Container, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { List, ListItem, Text } from "@chakra-ui/react";

export const Header = () => {
  const router = useRouter();
  const { service } = router.query;
  const currentRoute = router.asPath;
  const activeLink = "active-link";
  return (
    <Container
      as='header'
      maxW='100vw'
      centerContent
      pos='fixed'
      zIndex='200'
      h={["50px", "75px"]}>
      <Flex
        w={["xs", "sm", "md", "4xl", "6xl"]}
        gridGap={[2, 4, 6]}
        p={[2, 4, 6]}
        color='brand.400'>
        <List
          display='flex'
          gridGap={[2, 4, 6]}
          justifyContent={[
            "space-around",
            "space-around",
            "space-around",
            "flex-start",
          ]}
          w='100%'
          color='brand.500'>
          <ListItem className={currentRoute === "/" ? activeLink : ""}>
            <Link href='/'>
              <Image
                src='https://cdn-icons-png.flaticon.com/512/3122/3122427.png'
                alt='justice'
                boxSize='1.5em'
                mr={1}
              />
              <Text>Головна</Text>
            </Link>
          </ListItem>
          <ListItem
            className={
              currentRoute.match(/services/) !== null ? activeLink : ""
            }>
            <Link href={`/services/${service || "divorce"}`}>Послуги</Link>
          </ListItem>
          <ListItem className={currentRoute === "/contacts" ? activeLink : ""}>
            <Link href='/contacts'>Контакти</Link>
          </ListItem>
          <ListItem className={currentRoute === "/lawyer" ? activeLink : ""}>
            <Link href='/lawyer'>Юрист</Link>
          </ListItem>
        </List>
      </Flex>
    </Container>
  );
};

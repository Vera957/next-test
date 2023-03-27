/**
 * eslint-disable react/no-unescaped-entities
 *
 * @format
 */

/** @format */

import {
  Container,
  Box,
  Icon,
  List,
  ListItem,
  Text,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  RiSmartphoneFill,
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTelegramFill,
  RiMailFill,
} from "react-icons/ri";
import { FaViber } from "react-icons/fa";

export const Contacts = () => {
  return (
    <>
      <Container as='section' maxW='100vw' centerContent pt={["50px", "75px"]}>
        <Text as='h1' m={[2, 4]} textAlign='center'>
          Зв'яжіться з нами для отримання юридичної допомоги любим доступним
          методом:
        </Text>
        <Box
          w={["xs", "sm", "md", "4xl", "6xl"]}
          display='grid'
          gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}
          gridTemplateRows={["1fr 1fr", "1fr 1fr", "1fr 1fr", "auto"]}
          gridGap={[2, 4, 6]}>
          <Container
            p='0'
            color='brand.200'
            bgRepeat='no-repeat'
            bgSize='cover'
            bgPos='bottom'
            alt='згода'
            bgImage="url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"></Container>
          <List p={[2, 4]} display='grid' gridGap={[2, 4]}
          >
            <ListItem>
              <Link href='tel:+380933354154'>
                <Icon boxSize={6} as={RiSmartphoneFill}></Icon>
                +380933354154
              </Link>
            </ListItem>
            <ListItem>
              <MailTo />
            </ListItem>
            <ListItem>
              <Telegram />
            </ListItem>
            <ListItem>
              <Link href='https://www.facebook.com/sodo4ka' target='_blank'>
                <Icon boxSize={6} as={RiFacebookBoxFill} mr='5px'></Icon>{" "}
                Facebook
              </Link>
            </ListItem>
            <ListItem>
              <Viber />
            </ListItem>
            <ListItem>
              <Link
                href='https://instagram.com/0933354154_adwokat_i.s?igshid=YmMyMTA2M2Y='
                target='_blank'>
                <Icon mr='5px' boxSize={6} as={RiInstagramFill}></Icon>{" "}
                Instagram
              </Link>
            </ListItem>
          </List>
        </Box>
      </Container>
    </>
  );
};

const MailTo = () => {
  return (
    <a href='mailto:sodo4ka@gmail.com'>
      <Icon boxSize={6} as={RiMailFill} mr='5px'></Icon> Пошта
    </a>
  );
};

const Viber = () => {
  return (
    <a href='viber://chat/?number=%2B380933354154'>
      <Icon as={FaViber} boxSize={6} mr='5px'></Icon> Viber
    </a>
  );
};

const Telegram = () => {
  return (
    <a href='https://t.me/+380933354154'>
      <Icon as={RiTelegramFill} boxSize={6} mr='5px'></Icon>
      <Text> Telegram</Text>
    </a>
  );
};

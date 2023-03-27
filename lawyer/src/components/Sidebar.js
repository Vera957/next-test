/** @format */
import Link from "next/link";
import { List, ListItem, Box } from "@chakra-ui/react";
import { servList } from "./ServList";
import { useRouter } from "next/router";

export const Sidebar = () => {
 
  const router = useRouter()
  return (
    <>
      <Box
        pos={["relative", "relative", "relative", 'fixed']}
        bg='brand.300'
        minH={["auto", "auto", "auto", "100vh"]}
        w={["100%", "100%", "100%", "400px"]}
        p={[2, 4]}>
        <List display='grid' gridGap={[2, 4]}>
          {servList.map(({ name, link }) => {
            const activeLink =
              router.asPath === `/services/${link}` ? "active-link" : "";
            return (
              <ListItem
                display='flex'
                flexWrap='wrap'
                className={activeLink}
                key={link}>
                <Link href={`${link}`}>{name}</Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
};

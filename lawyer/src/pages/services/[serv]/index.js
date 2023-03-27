/** @format */
import { useRouter } from "next/router";
import { Divorce, Alimony } from "@/components/services/Divorce";
import { Admin } from "@/components/services/Admin";
import { Contract } from "@/components/services/Contract";
import { Victim } from "@/components/services/Victim";
import { Housing } from "@/components/services/Housing";
import { Inheritance } from "@/components/services/Inheritance";
import { Landing } from "@/components/services/Landing";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "@/components/Sidebar";
import { servList } from "@/components/ServList";

export default function Page() {
  const router = useRouter();
  const { serv } = router.query;

  const switcher = (serv) => {
    switch (serv) {
      case "divorce":
        return <Divorce />;
      case "criminal":
        return <Victim />;
      case "housing":
        return <Housing />;
      case "inheritance":
        return <Inheritance />;
      case "landing":
        return <Landing />;
      case "alimony":
        return <Alimony />;
      case "contract":
        return <Contract />;
      case "admin":
        return <Admin />;
      default:
        return <div>Послуга відсутня</div>;
    }
  };

  return (
    <>
      <Box
        w={["xs", "sm", "md", "4xl", "6xl"]}
        pt={["50px", "75px"]}
        as='section'
        display='flex'
        flexDirection={["column", "column", "column", "row"]}
        ml='auto'
        mr='auto'>
        <Sidebar props={servList}></Sidebar>
        <Box p={[2, 4]} ml={['0', '0', '0', '405px']}>
          {switcher(serv)}
        </Box>
      </Box>
    </>
  );
}

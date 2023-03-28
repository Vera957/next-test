import { Container, Box, Image, Text } from "@chakra-ui/react"

export const Personal = () => {
    return (
      <>
        <Container
          as='section'
          maxW='100vw'
          centerContent
          display='flex'
          justifyContent='center'
          h='100vh'
        >
          <Box
            w={["xs", "sm", "md", "4xl", "6xl"]}
            gridGap={[2, 4, 6]}
            p={[2, 4, 6]}>
            <Text textAlign='center'>Судомляк Ірина</Text>
            <Text textAlign='center'>
              Львівський Інститут внутрішніх справ при НАВС
            </Text>
            <Text textAlign='center' as='h1'>Більше 20 років юридичної практики</Text>
            <br/>
            <Image
              src='https://live.staticflickr.com/65535/52771384863_c42a86f5d6_z.jpg'
              alt='Lawyer'
              ml='auto'
              mr='auto'
              border='5px solid white'
            />
            <Text></Text>
          </Box>
        </Container>
      </>
    );
}
import { Container, Box } from "@chakra-ui/react"

export const Personal = () => {
    return (<>
        <Container as='section' maxW='100vw' centerContent pt={['50px', '75px']}>
            <Box w={['xs', 'sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]} p={[2, 4, 6]}>
                в процесі розробки
            </Box>
        </Container>
    </>)
}
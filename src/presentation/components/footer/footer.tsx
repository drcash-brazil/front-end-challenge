import { Box, Flex, Grid, Heading, Input, Text, Textarea } from '@chakra-ui/react'
import { SpaceButton } from '..'

export const Footer = () => {
  return (
    <Box bg="gray.800" color="whiteAlpha.900">
      <Grid gridTemplateColumns="1fr 1fr" gap="2rem" p="2rem 4rem" m="0 auto" maxWidth="142rem" width="100%">
        <Box>

        </Box>
        <Box>
          <Heading mb="2rem">Contact Us</Heading>
          <Input fontSize="2rem" height="4rem" placeholder="name" mb="2rem" />
          <Input fontSize="2rem" height="4rem" placeholder="email" mb="2rem" />
          <Textarea placeholder="Message" mb="2rem" />
          <SpaceButton>Send</SpaceButton>
        </Box>
      </Grid>
      <Flex bg="gray.900" p="4rem 0" alignItems="center" justifyContent="center">
        <Text fontSize="2rem">Reclins {new Date().getFullYear()} &copy; Copyright</Text>
      </Flex>
    </Box>
  )
}

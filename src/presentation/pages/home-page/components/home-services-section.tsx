import { Box, Heading, Text } from '@chakra-ui/react'

import { SpaceButton } from '@/presentation/components'

export const HomeServicesSection = () => {
  return (
    <Box bg="whiteAlpha.900" color="gray.900" textAlign="center" p="6rem 0">
      <Box maxWidth="142rem" m="0 auto" p="2rem 4rem">
        <Heading fontSize="6rem">Our services are  Guaranteeed,</Heading>
        <Heading fontSize="6rem">We Take Your Skin Seriously</Heading>
        <Text fontSize="2rem" letterSpacing=".15rem" width={['85%']} m="3rem auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod suscipit temporibus accusantium earum
          perferendis incidunt commodi aliquam similique dolor debitis quibusdam officia deleniti quis aperiam,
          numquam delectus saepe, perspiciatis placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <SpaceButton dark>Learn More</SpaceButton>
      </Box>
    </Box>
  )
}

import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import { SpaceButton } from '@/presentation/components'

export const HomePage = () => {
  return (
    <Box alignItems="center" color="whiteAlpha.900">
      <Box bg="gray.900">
        <Flex maxWidth="142rem" m="0 auto" p="2rem 4rem">
          <Box maxWidth="70%">
            <Heading fontSize="6rem">A sua melhor rede de clinicas de estéticas</Heading>
            <Text fontSize="1.5rem" color="whiteAlpha.500" my="1.5rem">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim aspernatur aperiam recusandae,
              ipsum dolorum omnis animi, quas tempore, distinctio adipisci dolore tenetur pariatur voluptas
              laborum consectetur rem placeat debitis! Officia odio doloribus eius veritatis placeat minus
              explicabo autem dolorum nihil, non, quas, sit aliquam. Odit architecto corrupti excepturi totam quam!
            </Text>
            <SpaceButton>Learn More</SpaceButton>
            <Flex p="4rem 0">
              {['Simple', 'Fast', 'Effective'].map(item => (
                <Text key={item} m="0 1rem" fontSize="1rem" fontWeight="bold" letterSpacing=".2rem">{item}</Text>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>

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
    </Box>
  )
}

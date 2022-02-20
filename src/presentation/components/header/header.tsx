import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const links = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Clinics',
    link: '/clinics'
  },
  {
    name: 'New',
    link: '/clinics/new'
  }
]

export const Header = () => {
  return (
    <Flex alignItems="center" justifyContent="center" bg="gray.900">
      <Flex p="2rem 4rem" m="0 auto" maxWidth="142rem" width="100%" alignItems="center" color="whiteAlpha.900">
        <Heading mr="4rem" fontSize="2.5rem">Reclis</Heading>
        <Flex mr="auto" justifyContent="center" alignItems="center">
          {links.map(item => (
            <Link key={uuid()} to={item.link}>
              <Text
                m="0 2rem"
                w="8rem"
                fontSize="1.5rem"
                textAlign="center"
                p="1rem 0"
                borderBottom="2px solid"
                borderColor="transparent"
                transition="all ease-in-out .25s"
                _hover={{ borderColor: 'whiteAlpha.900' }}
              >
                {item.name}
              </Text>
            </Link>
          ))}
        </Flex>
        <Box>
          <Link to="/contact">
            <Button
              h="4rem"
              w="15rem"
              bg="transparent"
              fontSize="1.5rem"
              border="2px solid"
              borderColor="whiteAlpha.900"
              _hover={{ bg: 'gray.800' }}
            >
              Contact Us
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

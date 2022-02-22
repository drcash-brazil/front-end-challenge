import { Box, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { makeSpecificClinicLink } from '@/main/utils/helpers'
import { Clinic as ClinicProps } from '@/domain/models'

import { SpaceButton } from '@/presentation/components'

export const Clinic = ({ id, name, cpf, address }: ClinicProps) => {
  return (
    <Box textAlign="left" bg="whiteAlpha.900" p="2rem" border="2px solid" borderColor="gray.900">
      <Heading textTransform="capitalize" mb="2rem">{name}</Heading>
      <Text><b>CPF</b>: {cpf}</Text>
      <Text><b>Address</b>: {address}</Text>
      <Link to={makeSpecificClinicLink(id)}>
        <SpaceButton dark mt="2rem">Learn More</SpaceButton>
      </Link>
    </Box>
  )
}

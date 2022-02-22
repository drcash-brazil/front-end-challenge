import { Box, Heading, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import {
  useQuery
} from 'react-query'

import { LoadClinicById } from '@/domain/usecases'

type ClinicPageParamProps = {
  id: string
}

type Props = {
  loadClinicById: LoadClinicById
}

export const ClinicPage = ({ loadClinicById }: Props) => {
  const { id } = useParams() as ClinicPageParamProps

  const { data: clinic, isFetched, isLoading } = useQuery('clinic', async () => await loadClinicById.load(id))

  return (
    <Box>
      <Box
        w="100%"
        h="70vh"
        bgImg="url('https://github.com/jeseias.png')"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
      />
      {isLoading && <p>Loading</p>}
      {isFetched && (
        <Box maxWidth="142rem" width="100%" m="0 auto">
          <Box bg="whiteAlpha.900">
            <Heading
              fontSize="6rem"
              position="relative"
              top="-3.6rem"
              color="whiteAlpha.900"
              textShadow="0 0 .4rem rgba(0,0,0, .8)"
              p="0 4rem"
            >
              {clinic?.name}
            </Heading>
            <Box mt="5rem" p="5rem" fontSize="4rem">
              <Text><b>Address:</b> {clinic?.address}</Text>
              <Text><b>CPF:</b> {clinic?.cpf}</Text>
            </Box>
          </Box>
          <Box bg="blackAlpha.200">
            <Heading>Available Services</Heading>
          </Box>
        </Box>
      )}
    </Box>
  )
}

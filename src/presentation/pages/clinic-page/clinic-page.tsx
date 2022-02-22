import { Box, Heading, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import {
  useQuery, useQueryClient
} from 'react-query'

import { LoadClinicById } from '@/domain/usecases'
import { Clinic } from '@/domain/models'
import { useEffect, useState } from 'react'

type ClinicPageParamProps = {
  id: string
}

type Props = {
  loadClinicById: LoadClinicById
}

export const ClinicPage = ({ loadClinicById }: Props) => {
  const { id } = useParams() as ClinicPageParamProps

  const [clinic, setClinic] = useState<Clinic | null>(null)

  const { data } = useQuery(['clinic', id], async () => await loadClinicById.load(id))

  const queryClient = useQueryClient()

  useEffect(() => {
    const clinics = queryClient.getQueryData<Clinic[]>('clinics')

    if (data) {
      return setClinic(data)
    }

    if (clinics) {
      const currentClinic = clinics.filter(item => item.id === id)[0]
      return setClinic(currentClinic)
    }
  }, [data])

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
      </Box>
    </Box>
  )
}

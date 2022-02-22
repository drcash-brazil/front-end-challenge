import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { Box, Flex, Grid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { Clinic as ClinicProps } from '@/domain/models'
import { LoadClinics } from '@/domain/usecases'

import { PagesRoutes } from '@/main/constants'

import { Clinic, Container, SpaceButton } from '@/presentation/components'

type Props = {
  loadClinics: LoadClinics
}

export const ClinicsPage = ({ loadClinics }: Props) => {
  const [clinics, setClinics] = useState<ClinicProps[] | null>(null)

  const { data } = useQuery('clinic', async () => await loadClinics.load())

  const queryClient = useQueryClient()

  useEffect(() => {
    const cachedClinics = queryClient.getQueryData<ClinicProps[]>('clinics')

    if (data) {
      return setClinics(data)
    }

    if (cachedClinics) {
      return setClinics(cachedClinics)
    }
  }, [data])

  return (
    <Box>
      <Container p="2rem 0">
        <Grid
            gridTemplateColumns={['1fr 1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']}
            gap="2rem"
            mt="4rem"
          >
          {clinics?.map(clinic => <Clinic key={clinic.id} {...clinic}/>)}
        </Grid>
      </Container>
      <Flex alignItems="center" justifyContent="center" p="2rem 0">
        <Link to={PagesRoutes.New}>
          <SpaceButton dark>New</SpaceButton>
        </Link>
      </Flex>
    </Box>
  )
}

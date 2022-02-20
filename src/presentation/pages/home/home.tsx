import { Box } from '@chakra-ui/react'
import {
  useQuery
} from 'react-query'

import { LoadClinics } from '@/domain/usecases'

import { HomeClinicsSection, HomeHeaderSection, HomeServicesSection } from './components'

type Props = {
  loadClinics: LoadClinics
}

export const HomePage = ({ loadClinics }: Props) => {
  const { data } = useQuery('clinics', async () => await loadClinics.load())

  return (
    <Box alignItems="center">
      <HomeHeaderSection />
      <HomeServicesSection />
      <HomeClinicsSection clinics={data ?? []} />
    </Box>
  )
}

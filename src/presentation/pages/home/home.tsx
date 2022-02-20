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
  const { data } = useQuery('clinics', loadClinics.load)

  console.log(data)

  return (
    <Box alignItems="center">
      <HomeHeaderSection />
      <HomeServicesSection />
      <HomeClinicsSection />
    </Box>
  )
}

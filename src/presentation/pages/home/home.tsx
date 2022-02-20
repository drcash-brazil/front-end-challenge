import { LoadClinics } from '@/domain/usecases'
import { Box } from '@chakra-ui/react'

import { HomeClinicsSection, HomeHeaderSection, HomeServicesSection } from './components'

type Props = {
  loadClinics: LoadClinics
}

export const HomePage = ({ loadClinics }: Props) => {
  return (
    <Box alignItems="center">
      <HomeHeaderSection />
      <HomeServicesSection />
      <HomeClinicsSection />
    </Box>
  )
}

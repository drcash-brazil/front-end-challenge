import { Box } from '@chakra-ui/react'

import { HomeClinicsSection, HomeHeaderSection, HomeServicesSection } from './components'

export const HomePage = () => {
  return (
    <Box alignItems="center">
      <HomeHeaderSection />
      <HomeServicesSection />
      <HomeClinicsSection />
    </Box>
  )
}

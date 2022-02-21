import React from 'react'
import { Box } from '@chakra-ui/react'

import { Header, Footer } from '@/presentation/components'

type Props = {
  children: React.ReactNode
}

export const Wrapper = ({ children }: Props) => {
  return (
    <Box>
      <Header />
      <Box>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import {
  QueryClientProvider
} from 'react-query'

import { queryClient } from '@/presentation/modules/query-client'

import Router from '@/main/routes/router'
import { theme } from '@/presentation/styles/global-styles'
import { Wrapper } from './presentation/components'

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Wrapper>
            <Router />
          </Wrapper>
        </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import {
  QueryClientProvider
} from 'react-query'

import Router from '@/main/routes/router'

import { queryClient } from '@/presentation/modules/services/query-client'
import { theme } from '@/presentation/styles/global-styles'
import { Wrapper } from '@/presentation/components'

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <ToastContainer position="bottom-right" theme="colored" />
          <Wrapper>
            <Router />
          </Wrapper>
        </ChakraProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App

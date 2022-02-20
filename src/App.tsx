import { ChakraProvider } from '@chakra-ui/react'

import Router from '@/main/routes/router'
import { theme } from '@/presentation/styles/global-styles'
import { BrowserRouter } from 'react-router-dom'
import { Wrapper } from './presentation/components'

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Wrapper>
          <Router />
        </Wrapper>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App

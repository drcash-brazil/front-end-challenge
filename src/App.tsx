import { ChakraProvider } from '@chakra-ui/react'

import Router from '@/main/routes/router'
import { theme } from '@/presentation/styles/global-styles'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  )
}

export default App

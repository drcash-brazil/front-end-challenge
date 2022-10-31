import GlobalStyle from "styles/globalStyle"
import Router from "routes/Router"
import { QueryClientProvider } from "@tanstack/react-query"
import queryClient from "services/queryClient"

const App = (): JSX.Element => {
   return (
      <QueryClientProvider client={queryClient}>
         <GlobalStyle />
         <Router />
      </QueryClientProvider>
   )
}

export default App


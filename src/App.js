import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { HeaderResponsive } from "./components/HeaderResponsive";
import { useMediaQuery } from "./hooks/useMediaQuery";
import RoutesRoot from "./routes";
import { queryClient } from "./services/queryClient";
import GlobalStyle from "./styles/global";
import { themes } from "./styles/themes";

function App() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themes}>
        <GlobalStyle />
        {isDesktop ? <Header /> : <HeaderResponsive />}
        <RoutesRoot />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

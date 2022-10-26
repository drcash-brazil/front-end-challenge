import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import RoutesRoot from "./routes";

// HOOKS
import { useMediaQuery } from "./hooks/useMediaQuery";

// SERVICES
import { queryClient } from "./services/queryClient";

// COMPONENTS
import { Header } from "./components/Header";
import { HeaderResponsive } from "./components/HeaderResponsive";

// STYLES
import { themes } from "./styles/themes";
import GlobalStyle from "./styles/global";

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

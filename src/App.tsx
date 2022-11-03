import GlobalStyle from "styles/globalStyle";
import Router from "routes/Router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "services/queryClient";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
};

export default App;


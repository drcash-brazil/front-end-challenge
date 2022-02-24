import { Router } from "./routes";
import { FormProvider } from "./contexts/FormContext";

function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;

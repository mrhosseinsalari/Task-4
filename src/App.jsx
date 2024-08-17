import AppProviders from "./providers/AppProviders";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <AppProviders>
      <AppLayout />
    </AppProviders>
  );
}

export default App;

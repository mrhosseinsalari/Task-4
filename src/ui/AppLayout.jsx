import AppHeader from "./AppHeader";
import AppMain from "./AppMain";

function AppLayout() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <AppHeader />
      <AppMain />
    </div>
  );
}

export default AppLayout;

import AppProducts from "../features/product/AppProducts";
import AppForms from "./AppForms";

function AppMain() {
  return (
    <div
      className="container mx-auto p-4 md:flex-row flex-col flex 
      md:justify-between lg:max-w-screen-xl md:gap-x-12"
    >
      <AppForms />
      <AppProducts />
    </div>
  );
}

export default AppMain;

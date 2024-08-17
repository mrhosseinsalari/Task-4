import { CategoriesProvider } from "../context/CategoriesContext";
import { ProductsProvider } from "../context/ProductsContext";

function AppProviders({ children }) {
  return (
    <CategoriesProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </CategoriesProvider>
  );
}

export default AppProviders;

import { createContext, useContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const ProductsContext = createContext();

function productsReducer(products, { type, payload }) {
  switch (type) {
    case "add": {
      return [...products, payload];
    }
    case "delete": {
      return products.filter((product) => product.id !== payload);
    }
    default:
      throw new Error("unknown action" + type);
  }
}

export function ProductsProvider({ children }) {
  const [products, dispatch] = useLocalStorageState(
    productsReducer,
    "products",
    []
  );

  return (
    <ProductsContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  if (context === undefined)
    throw new Error("ProductsContext was used outside of ProductsProvider");

  return context;
}

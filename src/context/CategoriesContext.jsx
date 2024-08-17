import { createContext, useContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const CategoriesContext = createContext();

function categoriesReducer(categories, { type, payload }) {
  switch (type) {
    case "add": {
      return [...categories, payload];
    }
    default:
      throw new Error("unknown action" + type);
  }
}

export function CategoriesProvider({ children }) {
  const [categories, dispatch] = useLocalStorageState(
    categoriesReducer,
    "categories",
    []
  );

  return (
    <CategoriesContext.Provider value={{ categories, dispatch }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);

  if (context === undefined)
    throw new Error("CategoriesContext was used outside of CategoriesProvider");

  return context;
}

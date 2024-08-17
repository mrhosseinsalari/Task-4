import { useCategories } from "../../context/CategoriesContext";

export default function useTransformedCategories() {
  const { categories } = useCategories();

  const transformedCategories = categories.map((item) => {
    return { label: item.title, value: item.id };
  });

  return transformedCategories;
}

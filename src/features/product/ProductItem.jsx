import { useCategories } from "../../context/CategoriesContext";
import { useProducts } from "../../context/ProductsContext";

function ProductItem({ product }) {
  const { id, title, category: categoryId, quantity, createdAt } = product;

  const { categories } = useCategories();
  const { dispatch } = useProducts();

  const categoryTitle = categories.find(
    (category) => category.id === Number(categoryId)
  ).title;

  const onDelete = () => {
    dispatch({ type: "delete", payload: id });
  };

  return (
    <div className="flex items-center justify-between mb-2 w-full min-w-[400px]">
      <span className="text-slate-400">{title}</span>
      <div className="flex items-center gap-x-3">
        <span className="text-slate-400">
          {new Date(createdAt).toLocaleDateString()}
        </span>
        <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
          {categoryTitle}
        </span>
        <span
          className="flex items-center justify-center w-7 h-7 rounded-full 
         bg-slate-500 border-2 border-slate-300 text-slate-300"
        >
          {quantity}
        </span>
        <button
          onClick={onDelete}
          className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400 delete-product"
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem;

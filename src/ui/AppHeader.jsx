import { useProducts } from "../context/ProductsContext";

function AppHeader() {
  const { products } = useProducts();

  return (
    <div className="h-12 flex items-center justify-center gap-x-4 bg-slate-700 mb-6 sticky top-0">
      <h1 className="md:text-xl text-sm font-bold text-slate-300">
        Inventory App using tailwind &amp; React.js
      </h1>
      <span
        className="flex items-center justify-center w-7 h-7 rounded-full 
       bg-slate-500 border-2 border-slate-300 font-bold text-slate-300"
      >
        {products.length}
      </span>
    </div>
  );
}

export default AppHeader;

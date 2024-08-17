import FiltersProducts from "./FiltersProducts";
import ProductsList from "./ProductsList";

function AppProducts() {
  return (
    <div className="w-full">
      <FiltersProducts />
      <ProductsList />
    </div>
  );
}

export default AppProducts;

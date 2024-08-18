import { useState } from "react";
import FiltersProducts from "./FiltersProducts";
import ProductsList from "./ProductsList";
import { useProducts } from "../../context/ProductsContext";

function AppProducts() {
  const { products } = useProducts();

  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("latest");
  const [category, setCategory] = useState("All");

  const handleChangeSearchValue = (e) => setSearchValue(e.target.value);
  const handleChangeSort = (e) => setSort(e.target.value);
  const handleChangeCategory = (e) => setCategory(e.target.value);

  const handleSort = (a, b) => {
    switch (sort) {
      case "latest":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "earliest":
        return new Date(a.createdAt) - new Date(b.createdAt);
      default:
        throw new Error("No Matching Sort!");
    }
  };

  const filteredAndSortProducts = products
    .filter((p) =>
      p.title.toLowerCase().includes(searchValue.trim().toLowerCase())
    )
    .filter((p) => (category === "All" ? true : p.category === category))
    .sort(handleSort);

  return (
    <div className="w-full">
      <FiltersProducts
        searchValue={searchValue}
        onChangeSearchValue={handleChangeSearchValue}
        sort={sort}
        onChangeSort={handleChangeSort}
        category={category}
        onChangeCategory={handleChangeCategory}
      />
      <ProductsList products={filteredAndSortProducts} />
    </div>
  );
}

export default AppProducts;

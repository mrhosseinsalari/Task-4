import { useState } from "react";
import Select from "../../ui/Select";
import useTransformedCategories from "../category/useTransformedCategories";
import SearchField from "../../ui/SearchField";

const sortOptions = [
  { label: "latest", value: "latest" },
  { label: "earliest", value: "earliest" },
];

function FiltersProducts() {
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("latest");
  const [filter, setFilter] = useState("All");

  const transformedCategories = useTransformedCategories();

  const filterOptions = [
    { label: "All", value: "All" },
    ...transformedCategories,
  ];

  return (
    <div className="mb-6">
      <h2 className="text-slate-500 font-bold mb-5 border-b-slate-500 border-b">
        Filters
      </h2>
      <SearchField
        name="search-input"
        label="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Select
        label="sort"
        name="sort-products"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        options={sortOptions}
        className="select__input"
      />
      <Select
        label="category"
        name="filter-products"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        options={filterOptions}
        className="select__input"
      />
    </div>
  );
}

export default FiltersProducts;

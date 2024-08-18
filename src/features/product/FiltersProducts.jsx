import Select from "../../ui/Select";
import useTransformedCategories from "../category/useTransformedCategories";
import SearchField from "../../ui/SearchField";

function FiltersProducts({
  searchValue,
  onChangeSearchValue,
  sort,
  onChangeSort,
  category,
  onChangeCategory,
}) {
  const transformedCategories = useTransformedCategories();

  const categoryOptions = [
    { label: "All", value: "All" },
    ...transformedCategories,
  ];

  const sortOptions = [
    { label: "latest", value: "latest" },
    { label: "earliest", value: "earliest" },
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
        onChange={onChangeSearchValue}
      />
      <Select
        label="sort"
        name="sort-products"
        value={sort}
        onChange={onChangeSort}
        options={sortOptions}
      />
      <Select
        label="category"
        name="filter-products"
        value={category}
        onChange={onChangeCategory}
        options={categoryOptions}
      />
    </div>
  );
}

export default FiltersProducts;

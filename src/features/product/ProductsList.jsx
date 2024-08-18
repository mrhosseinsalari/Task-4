import ProductItem from "./ProductItem";

function ProductsList({ products }) {
  return (
    <div>
      <h2 className="text-xl text-slate-400 font-bold mb-4 border-b-slate-500 border-b">
        Products List
      </h2>
      <div className="overflow-x-auto">
        {!products.length ? (
          <p className="text-slate-400">There is no product ...</p>
        ) : (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductsList;

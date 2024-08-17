import TextField from "../../ui/TextField";
import useTransformedCategories from "../category/useTransformedCategories";
import { useProducts } from "../../context/ProductsContext";
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";

function AddProductForm() {
  const { dispatch } = useProducts();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const transformedCategories = useTransformedCategories();

  const categoryOptions = [
    { label: "select a category", value: "" },
    ...transformedCategories,
  ];

  const onSubmit = (data) => {
    const newProduct = {
      ...data,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    dispatch({ type: "add", payload: newProduct });
    reset();
  };

  return (
    <div className="mb-10">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
      >
        <TextField
          name="title"
          id="product-title"
          register={register}
          validationSchema={{ required: "The title is required" }}
          errors={errors}
        />
        <TextField
          name="quantity"
          id="product-quantity"
          register={register}
          validationSchema={{ required: "The quantity is required" }}
          type="number"
          errors={errors}
        />
        <RHFSelect
          id="product-category"
          name="category"
          register={register}
          validationSchema={{ required: "Please select a category" }}
          options={categoryOptions}
          errors={errors}
        />
        <div className="flex items-center justify-between gap-x-4">
          <button type="submit" className="btn btn--primary">
            Add new Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;

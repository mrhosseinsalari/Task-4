import { useState } from "react";
import TextField from "../../ui/TextField";
import Textarea from "../../ui/Textarea";
import { useCategories } from "../../context/CategoriesContext";
import { useForm } from "react-hook-form";

function AddCategoryForm() {
  const { dispatch } = useCategories();
  const [visibleForm, setVisibleForm] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newCategory = {
      ...data,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    dispatch({ type: "add", payload: newCategory });
    reset();
  };

  if (!visibleForm)
    return (
      <button
        onClick={() => setVisibleForm(true)}
        className="text-slate-600 text-lg mb-4 font-medium false"
      >
        Add New Category?
      </button>
    );

  return (
    <div className="mb-8">
      <h2 className="text-xl text-slate-300 font-bold mb-2">
        Add New Category
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4"
      >
        <TextField
          name="title"
          id="category-title"
          register={register}
          validationSchema={{ required: "The title is required" }}
          errors={errors}
        />
        <Textarea
          name="description"
          id="category-description"
          register={register}
          validationSchema={{ required: "The description is required" }}
          errors={errors}
        />
        <div className="flex items-center justify-between gap-x-4">
          <button
            onClick={() => setVisibleForm(false)}
            className="btn btn--secondary"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn--primary">
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCategoryForm;

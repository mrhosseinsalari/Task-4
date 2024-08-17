function TextField({
  name,
  id,
  register,
  validationSchema,
  errors,
  type = "text",
}) {
  return (
    <div>
      <label className="block mb-1 text-slate-400" htmlFor={id}>
        {name}
      </label>
      <input
        {...register(name, validationSchema)}
        id={id}
        type={type}
        className="textField__input w-full md:w-auto"
      />
      {errors && errors[name] && (
        <span className="text-red-400 block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;

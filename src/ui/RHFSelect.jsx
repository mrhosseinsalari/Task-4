function RHFSelect({ id, name, register, validationSchema, options, errors }) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-slate-400">
        {name}
      </label>
      <select
        {...register(name, validationSchema)}
        id={id}
        className="select__input w-full"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-slate-500 text-slate-300"
          >
            {option.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-red-400 block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RHFSelect;

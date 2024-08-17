function Textarea({ name, id, register, validationSchema, errors }) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-slate-400">
        {name}
      </label>
      <textarea
        {...register(name, validationSchema)}
        className="textField__input w-full"
        id={id}
      ></textarea>
      {errors && errors[name] && (
        <span className="text-red-400 block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default Textarea;

function Select({ name, value, onChange, options, label }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <label htmlFor={name} className="text-slate-500 text-lg">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="select__input"
      >
        {options.map((item) => (
          <option
            key={item.value}
            value={item.value}
            className="bg-slate-500 text-slate-300"
          >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

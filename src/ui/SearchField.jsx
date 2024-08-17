function SearchField({ name, label, value, onChange }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <label htmlFor={name} className="text-slate-500 text-lg">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        name={name}
        id={name}
        className="textField__input"
      />
    </div>
  );
}

export default SearchField;

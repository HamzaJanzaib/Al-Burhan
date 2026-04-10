import React from "react";

const BookingInput = ({
  label,
  name,
  type = "text",
  placeholder,
  icon: Icon,
  options,
  formData,
  errors,
  handleChange,
}) => {
  const baseStyles = `w-full pr-4 py-3.5 bg-background border ${
    errors[name]
      ? "border-red-300 ring-2 ring-red-100"
      : "border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 shadow-sm"
  } rounded-xl outline-none transition-all cursor-pointer font-medium text-slate-700 placeholder-slate-400`;

  return (
    <div className="space-y-1.5 w-full">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">
        {label}
      </label>
      <div className="relative group">
        {Icon && (
          <Icon
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors"
            size={18}
          />
        )}

        {type === "select" ? (
          <select
            name={name}
            value={formData[name] || ""}
            onChange={handleChange}
            className={`${baseStyles} pl-4 pr-10 appearance-none`}
          >
            <option value="">{placeholder}</option>
            {options?.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </select>
        ) : type === "textarea" ? (
          <textarea
            name={name}
            rows="3"
            value={formData[name] || ""}
            onChange={handleChange}
            className={`${baseStyles} pl-4 resize-none`}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={formData[name] || ""}
            onChange={handleChange}
            className={`${baseStyles} ${Icon ? "pl-11" : "pl-4"}`}
            placeholder={placeholder}
          />
        )}
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs ml-1 font-medium">{errors[name]}</p>
      )}
    </div>
  );
};

export default BookingInput;

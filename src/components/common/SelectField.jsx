import React from "react";

function SelectField({ options, ...rest }) {
  return (
    <div className="rounded-lg border-2 border-primary-700 pr-5 bg-black-0">
      <select
        name=""
        id=""
        className="pl-6 py-5 pr-0 w-full rounded-lg text-xs.2.0  md:text-lg text-primary-700 focus:outline-none bg-black-0"
      >
        {options.map(({ name, value }, i) => (
          <option value={value} key={i}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;

import { useState } from "react"

export default function NewInput({
  label,
  name,
  type,
  onChange,
  value,
  placeholder = ""
}) {

  return (
    <label>
      <span>{label}</span>
      <input
        type={type}
        onChange={e => onChange(e)}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </label>
  )
}
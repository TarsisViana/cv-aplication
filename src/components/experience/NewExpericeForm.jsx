import { useState } from "react"
import NewInput from "../NewInput"

export default function NewExperienceForm({ onAddEd }) {
  const [company, setCompany] = useState('')
  const [position, setPosition] = useState('')
  const [startYear, setStartYear] = useState('')
  const [endYear, setEndYear] = useState('')


  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)
    console.log(payload)

    onAddEd(payload)

    //reset form
    setCompany('')
    setStartYear('')
    setEndYear('')
    setPosition('')
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <NewInput
        label="Company Name"
        type="text"
        onChange={setCompany}
        value={company}
        name="company"
      />
      <NewInput
        label="Position"
        type="text"
        onChange={setPosition}
        value={position}
        name="position"
      />
      <fieldset>
        <NewInput
          label="Start & End year"
          type="number"
          onChange={setStartYear}
          value={startYear}
          name="startYear"
          placeholder="YYYY"
        />
        <NewInput
          label=""
          type="number"
          onChange={setEndYear}
          value={endYear}
          name="endYear"
          placeholder="YYYY"
        />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  )
}
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
        onChange={e => setCompany(e.target.value)}
        value={company}
        name="company"
      />
      <NewInput
        label="Position"
        type="text"
        onChange={e => setPosition(e.target.value)}
        value={position}
        name="position"
      />
      <fieldset>
        <NewInput
          label="Start & End year"
          type="number"
          onChange={e => setStartYear(e.target.value)}
          value={startYear}
          name="startYear"
          placeholder="YYYY"
        />
        <NewInput
          label=""
          type="number"
          onChange={e => setEndYear(e.target.value)}
          value={endYear}
          name="endYear"
          placeholder="YYYY"
        />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  )
}
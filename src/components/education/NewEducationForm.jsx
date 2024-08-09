import { useState } from "react"
import NewInput from "../NewInput"

export default function NewEducationForm({ onAddEd }) {
  const [school, setSchool] = useState('')
  const [degree, setDegree] = useState('')
  const [startYear, setStartYear] = useState('')
  const [endYear, setEndYear] = useState('')


  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)
    console.log(payload)

    onAddEd(payload)

    //reset form
    setSchool('')
    setStartYear('')
    setEndYear('')
    setDegree('')
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <NewInput
        label="School Name"
        type="text"
        onChange={e => setSchool(e.target.value)}
        value={school}
        name="school"
      />
      <NewInput
        label="Degree"
        type="text"
        onChange={e => setDegree(e.target.value)}
        value={degree}
        name="degree"
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
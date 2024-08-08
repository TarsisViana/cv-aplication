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
        onChange={setSchool}
        value={school}
        name="school"
      />
      <NewInput
        label="Degree"
        type="text"
        onChange={setDegree}
        value={degree}
        name="degree"
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
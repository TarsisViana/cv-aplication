import { useState } from "react"
import NewInput from "../NewInput"

export default function EditForm({
  inicialSchool,
  inicialDegree,
  inicialStartYear,
  inicialEndYear,
  id,
  onSave,
  closeForm
}) {

  const [school, setSchool] = useState(inicialSchool)
  const [degree, setDegree] = useState(inicialDegree)
  const [startYear, setStartYear] = useState(inicialStartYear)
  const [endYear, setEndYear] = useState(inicialEndYear)


  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    onSave(payload, id)
    closeForm()

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <NewInput
        label="School Name"
        type="text"
        onChange={(e) => setSchool(e.target.value)}
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
      <button type="submit">save</button>
    </form>
  )
}
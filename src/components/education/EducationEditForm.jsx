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
      <button type="submit">save</button>
    </form>
  )
}
import { useState } from "react"
import NewInput from "../NewInput"

export default function EditForm({
  inicialCompany,
  inicialPosition,
  inicialStartYear,
  inicialEndYear,
  id,
  onSave,
  closeForm
}) {

  const [company, setCompany] = useState(inicialCompany)
  const [position, setPosition] = useState(inicialPosition)
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
      <button type="submit">save</button>
    </form>
  )
}
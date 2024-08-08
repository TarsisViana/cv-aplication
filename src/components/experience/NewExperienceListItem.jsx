import { useState } from "react"
import EditForm from "./ExperienceEditForm.jsx"

export default function NewExperienceListItem({
  company,
  position,
  startYear,
  endYear,
  id,
  inicialEdit = false,
  onEdit
}) {
  const [edit, setEdit] = useState(inicialEdit)

  function handleEditToggle() {
    edit ? setEdit(false) : setEdit(true)
  }

  if (edit) {
    return (
      <>
        <li>
          <h3>{position} at {company}</h3>
          <span>{startYear}-{endYear}</span>
          <button onClick={handleEditToggle}>close</button>
        </li>
        <EditForm
          inicialCompany={company}
          inicialPosition={position}
          inicialStartYear={startYear}
          inicialEndYear={endYear}
          id={id}
          onSave={onEdit}
          closeForm={handleEditToggle}
        />
      </>
    )
  }
  return (
    <li>
      <h3>{position} at {company}</h3>
      <span>{startYear}-{endYear}</span>
      <button onClick={handleEditToggle}>open</button>
    </li>
  )
}
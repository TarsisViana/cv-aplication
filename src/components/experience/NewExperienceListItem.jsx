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

  return (
    <>
      <li>
        <h3>{position} at {company}</h3>
        <span>{startYear}-{endYear}</span>
        <button onClick={handleEditToggle}>
          {edit ? "close" : "open"}
        </button>
      </li>
      {
        !edit ? null
          : <EditForm
            inicialCompany={company}
            inicialPosition={position}
            inicialStartYear={startYear}
            inicialEndYear={endYear}
            id={id}
            onSave={onEdit}
            closeForm={handleEditToggle}
          />
      }
    </>
  )
}
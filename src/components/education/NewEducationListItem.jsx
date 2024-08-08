import { useState } from "react"
import EditForm from "./EducationEditForm.jsx"

export default function NewEducationListItem({
  school,
  degree,
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
          <h3>{degree} at {school}</h3>
          <span>{startYear}-{endYear}</span>
          <button onClick={handleEditToggle}>close</button>
        </li>
        <EditForm
          inicialSchool={school}
          inicialDegree={degree}
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
      <h3>{degree} at {school}</h3>
      <span>{startYear}-{endYear}</span>
      <button onClick={handleEditToggle}>open</button>
    </li>
  )
}
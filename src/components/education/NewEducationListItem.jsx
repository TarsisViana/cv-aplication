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

  return (
    <>
      <li>
        <h3>{degree} at {school}</h3>
        <span>{startYear}-{endYear}</span>
        <button onClick={handleEditToggle}>
          {edit ? "close" : "open"}
        </button>
      </li>
      {
        !edit ? null
          : <EditForm
            inicialSchool={school}
            inicialDegree={degree}
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
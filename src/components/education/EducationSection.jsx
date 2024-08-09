import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewEducationForm from "./NewEducationForm";
import NewEducationListItem from "./NewEducationListItem";
import TitleWithButton from "../TitleWithButton";



export default function EducationSection({ open, onOpen }) {
  const [educationList, setEducationList] = useState([]);

  function onAddEd(ed) {
    const newEd = { ...ed, id: uuidv4() }
    setEducationList([...educationList, newEd])
  }

  function handleEdit(ed, id) {
    const index = educationList.findIndex((value) => {
      return value.id === id
    })
    const copyList = [...educationList]
    copyList[index] = { ...ed, id };
    setEducationList(copyList)
  }


  return (
    <section className="education">
      <TitleWithButton
        title="Education"
        id={2}
        onClick={onOpen}
      />
      {
        open !== 2 ? null
          : <>
            <ul>
              {educationList.map(ed => {
                return (
                  <NewEducationListItem
                    {...ed}
                    key={ed.id}
                    onEdit={handleEdit}
                  />)
              })}
            </ul>
            <NewEducationForm onAddEd={onAddEd} />
          </>
      }
    </section>
  )
}


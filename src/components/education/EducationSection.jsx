import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewEducationForm from "./NewEducationForm";
import NewEducationListItem from "./NewEducationListItem";
import TitleWithButton from "../TitleWithButton";



export default function EducationSection({
  openIndex,
  onOpen,
  educationData,
  onChange
}) {

  function onAddEd(ed) {
    const newEd = { ...ed, id: uuidv4() }
    onChange([...educationData, newEd])
  }

  function handleEdit(ed, id) {
    const index = educationData.findIndex((value) => {
      return value.id === id
    })
    const copyList = [...educationData]
    copyList[index] = { ...ed, id };
    onChange(copyList)
  }


  return (
    <section className="education">
      <TitleWithButton
        title="Education"
        id={1}
        onClick={onOpen}
      />
      {
        openIndex !== 1 ? null
          : <>
            <ul>
              {educationData.map(ed => {
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


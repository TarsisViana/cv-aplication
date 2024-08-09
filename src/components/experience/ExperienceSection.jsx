import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewExperienceForm from "./NewExpericeForm";
import NewExperienceListItem from "./NewExperienceListItem";
import TitleWithButton from "../TitleWithButton";



export default function ExperienceSection({
  openIndex,
  onOpen,
  experienceData,
  onChange
}) {


  function onAddEd(ex) {
    const newEx = { ...ex, id: uuidv4() }
    onChange([...experienceData, newEx])
  }

  function handleEdit(ex, id) {
    const index = experienceData.findIndex((value) => {
      return value.id === id
    })
    const copyList = [...experienceData]
    copyList[index] = { ...ex, id };
    onChange(copyList)
  }


  return (
    <section className="experience">
      <TitleWithButton
        title="Experience"
        id={2}
        onClick={onOpen}
      />
      {
        openIndex !== 2 ? null
          : <>
            <ul>
              {experienceData.map(ex => {
                return (
                  <NewExperienceListItem
                    {...ex}
                    key={ex.id}
                    onEdit={handleEdit}
                  />)
              })}
            </ul>
            <NewExperienceForm onAddEd={onAddEd} />
          </>
      }
    </section>
  )
}
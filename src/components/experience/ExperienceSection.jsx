import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewExperienceForm from "./NewExpericeForm";
import NewExperienceListItem from "./NewExperienceListItem";
import TitleWithButton from "../TitleWithButton";



export default function ExperienceSection({ open, onOpen }) {
  const [experienceList, setExperienceList] = useState([]);

  function onAddEd(ed) {
    const newEd = { ...ed, id: uuidv4() }
    setExperienceList([...experienceList, newEd])
  }

  function handleEdit(ed, id) {
    const index = experienceList.findIndex((value) => {
      return value.id === id
    })
    const copyList = [...experienceList]
    copyList[index] = { ...ed, id };
    setExperienceList(copyList)
  }


  return (
    <section className="experience">
      <TitleWithButton
        title="Experience"
        id={3}
        onClick={onOpen}
      />
      {
        open !== 3 ? null
          : <>
            <ul>
              {experienceList.map(ed => {
                return (
                  <NewExperienceListItem
                    {...ed}
                    key={ed.id}
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
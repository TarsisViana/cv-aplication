import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewExperienceForm from "./NewExpericeForm";
import NewExperienceListItem from "./NewExperienceListItem";



export default function ExperienceSection() {
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
      <h2 className="experienceTitle">Experience</h2>
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
    </section>
  )
}
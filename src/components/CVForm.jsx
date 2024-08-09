import { useState } from 'react'
import GeneralInfo from './generalSection/General'
import EducationSection from './education/EducationSection'
import ExperienceSection from './experience/ExperienceSection'

export default function CVForm() {

  const [open, setOpen] = useState(1)

  function onOpen(id) {
    setOpen(id)
  }

  return (
    <div className="cvForm">
      <GeneralInfo onOpen={onOpen} open={open} />
      <EducationSection onOpen={onOpen} open={open} />
      <ExperienceSection onOpen={onOpen} open={open} />
    </div>
  )
}
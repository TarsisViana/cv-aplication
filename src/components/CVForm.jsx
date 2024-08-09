import { useState } from 'react'
import GeneralInfo from './generalSection/General'
import EducationSection from './education/EducationSection'
import ExperienceSection from './experience/ExperienceSection'

export default function CVForm({ onRender }) {

  const [openIndex, setOpenIndex] = useState(0)
  const [cvData, setCvData] = useState({
    personalInfo: personalInfo,
    education: [],
    experience: []
  })


  function handleEdChange(edList) {
    setCvData({
      ...cvData,
      education: edList
    })
  }

  function handlePIChange(personalData) {
    setCvData({
      ...cvData,
      personalInfo: personalData
    })
  }

  function handleExChange(exList) {
    setCvData({
      ...cvData,
      experience: exList
    })
  }

  function onOpen(id) {
    setOpenIndex(id)
  }

  return (
    <div className="cvForm">
      <GeneralInfo
        onOpen={onOpen}
        openIndex={openIndex}
        personalInfo={cvData.personalInfo}
        onChange={handlePIChange}
      />
      <EducationSection
        onOpen={onOpen}
        openIndex={openIndex}
        educationData={cvData.education}
        onChange={handleEdChange}
      />
      <ExperienceSection
        onOpen={onOpen}
        openIndex={openIndex}
        experienceData={cvData.experience}
        onChange={handleExChange}
      />
      <button onClick={() => onRender(cvData)}>render CV</button>
    </div>
  )
}

const personalInfo = {
  fullName: '',
  email: '',
  phone: ''
}
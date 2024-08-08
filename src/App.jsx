import { useState } from 'react'
import './styles/App.css'
import GeneralInfo from './components/generalSection/General.jsx'
import EducationSection from './components/education/EducationSection.jsx'
import ExperienceSection from './components/experience/ExperienceSection.jsx'

function App() {
  const [education, setEducation] = useState([])
  return (
    <>
      <div className="formSection">
        <GeneralInfo />
        <EducationSection />
        <ExperienceSection />
      </div>

    </>
  )
}

export default App

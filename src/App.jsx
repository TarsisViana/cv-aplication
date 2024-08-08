import { useState } from 'react'
import './styles/App.css'
import GeneralInfo from './components/generalSection/General.jsx'
import EducationSection from './components/education/EducationSection.jsx'

function App() {
  const [education, setEducation] = useState([])
  return (
    <>
      <div className="formSection">
        <GeneralInfo />
        <EducationSection />
      </div>

    </>
  )
}

export default App

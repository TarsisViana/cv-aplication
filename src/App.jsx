import { useState } from 'react'
import './styles/App.css'
import CVForm from './components/CVForm.jsx'

function App() {
  const [education, setEducation] = useState([])
  return (
    <>
      <div className="formSection">
        <CVForm />
      </div>

    </>
  )
}

export default App

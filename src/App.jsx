import { useState } from 'react'
import './styles/App.css'
import CVForm from './components/CVForm.jsx'
import PrintCV from './components/CVHTML.jsx';

function App() {

  const [edit, setEdit] = useState(true);
  const [cvData, setCvData] = useState(null)

  function onRender(cvObj) {
    setCvData(cvObj)
    setEdit(false);
    console.log(cvData)
  }


  return (
    <>

      <div className={!edit ? "displayNone" : "formSection"}
      >
        <CVForm onRender={onRender} />
      </div>


      {edit ? null : <PrintCV
        cvData={cvData}
        onEdit={() => setEdit(true)}
      />}
    </>
  )
}

export default App

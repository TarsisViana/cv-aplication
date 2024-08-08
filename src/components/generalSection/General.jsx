import { useState } from "react";
import NewInput from "../NewInput";

export default function GeneralInfo() {
  const [fullName, setFullName] = useState("John john")
  const [email, setEmail] = useState("jj@gmail.com")
  const [telNumber, setTelNumber] = useState("99999999")

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      fullName,
      email,
      telNumber
    }

    console.log(formData)

  }

  return (
    <>
      <h2 className="personalInfo">Personal Information</h2>
      <form onSubmit={handleSubmit} className="generalInfo">
        <NewInput
          label="Full Name"
          name="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <NewInput
          label="Email"
          value={email}
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <NewInput
          label="Phone number"
          value={telNumber}
          name="phone"
          type="number"
          onChange={(e) => setTelNumber(e.target.value)}
        />

        <button>submit</button>
      </form>
    </>
  )
}
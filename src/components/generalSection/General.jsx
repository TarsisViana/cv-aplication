import { useState } from "react";
import NewInput from "../NewInput";
import TitleWithButton from "../TitleWithButton";

export default function GeneralInfo({
  openIndex,
  onOpen,
  personalInfo,
  onChange
}) {

  function handleChange(e) {
    onChange({
      ...personalInfo,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <TitleWithButton
        title="Personal Info"
        id={0}
        onClick={onOpen}
      />
      {
        openIndex !== 0 ? null
          : <>
            <form onSubmit={(e) => e.preventDefault()} className="generalInfo">
              <NewInput
                label="Full Name"
                name="fullName"
                type="text"
                value={personalInfo.fullName}
                onChange={handleChange}
                placeholder="John Johnson"
              />
              <NewInput
                label="Email"
                value={personalInfo.email}
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="john@email.com"
              />
              <NewInput
                label="Phone number"
                value={personalInfo.phone}
                name="phone"
                type="number"
                onChange={handleChange}
                placeholder="99999999"
              />
            </form>
          </>
      }
    </>
  )
}

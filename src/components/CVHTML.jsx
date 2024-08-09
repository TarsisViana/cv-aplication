export default function PrintCV({ cvData, onEdit }) {
  return (
    <div className="printWrapper">
      <section className="personalInfo">
        <h2 className="fullName">{cvData.personalInfo.fullName}</h2>
        <p className="email">{cvData.personalInfo.email}</p>
        <p className="phone">{cvData.personalInfo.phone}</p>
      </section>
      <section className="education">
        {cvData.education.map(education => {
          return (
            <div key={education.id}>
              <h3 className="edTitle">
                {education.degree} at {education.school}
              </h3>
              <p className="date">
                {education.startYear}-{education.endYear}
              </p>
            </div>
          )
        })}
      </section>
      <section className="experience">
        {cvData.experience.map(ex => {
          return (
            <div key={ex.id}>
              <h3 className="exTitle">
                {ex.position} at {ex.company}
              </h3>
              <p className="date">
                {ex.startYear}-{ex.endYear}
              </p>
            </div>
          )
        })}
      </section>
      <button onClick={onEdit}>edit</button>
    </div>
  )
}
import { useState } from "react"

export default function NewEducationList() {
  const [edList, setEdList] = useState([]);

  return (
    <ul>
      {edList.map(ed => {
        return <NewEducationListItem value={ed} />
      })}
    </ul>
  )
}
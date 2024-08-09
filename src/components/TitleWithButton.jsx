export default function TitleWithButton({ title, id, onClick }) {

  function handleClick() {
    onClick(id)
  }
  return (
    <div className="titleWithButton">
      <h2>{title}</h2>
      <button onClick={handleClick}>
        open
      </button>
    </div>
  )
}
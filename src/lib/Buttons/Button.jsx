export default function Button({ code, style }) {
  console.log(style)
  return (
    <div className="flex space-x-4 items-center overflow-x-auto">
      <button style={{ ...style.commonStyles, ...style.buttonSM }}>
        Button
      </button>
      <button style={{ ...style.commonStyles, ...style.buttonR }}>
        Button
      </button>
      <button style={{ ...style.commonStyles, ...style.buttonLG }}>
        Button
      </button>
      <button style={{ ...style.commonStyles, ...style.buttonXL }}>
        Button
      </button>
    </div>
  )
}

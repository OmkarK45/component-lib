import "./Avatar.scss"
export default function Avatar({ style, code }) {
  console.log(style)
  return (
    <div className="flex items-center space-x-4">
      <img
        className="avatar avatar-sm"
        src="https://bit.ly/kent-c-dodds"
        alt="Kent Bhaiyya"
      />
      <img
        src="https://bit.ly/kent-c-dodds"
        className="avatar avatar-md"
        alt="cat"
      />
      <img
        className="avatar avatar-lg"
        src="https://bit.ly/kent-c-dodds"
        alt="cat"
      />
      <img
        className="avatar avatar-xl"
        src="https://bit.ly/kent-c-dodds"
        alt="cat"
      />
    </div>
  )
}

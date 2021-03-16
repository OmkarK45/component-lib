export default function Avatar({ style, code }) {
  console.log(style)
  return (
    <div className="flex items-center space-x-4">
      <img
        style={{ ...style.commonStyles, ...style.avatarSM }}
        src="https://bit.ly/kent-c-dodds"
        alt="Kent Bhaiyya"
      />
      <img
        style={{ ...style.commonStyles, ...style.avatarMD }}
        src="https://bit.ly/kent-c-dodds"
        alt="cat"
      />
      <img
        style={{ ...style.commonStyles, ...style.avatarLG }}
        src="https://bit.ly/kent-c-dodds"
        alt="cat"
      />
      <img
        style={{ ...style.commonStyles, ...style.avatarXL }}
        src="https://bit.ly/kent-c-dodds"
        alt="cat"
      />
    </div>
  )
}

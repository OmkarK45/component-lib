import SectionHeader from "../../components/Section/SectionHeader"
import ComponentHolder from "./../../components/Container/ComponentHolder"
import Avatar from "./Avatar"
export default function AvatarWrapper() {
  const commonStyles = {
    borderRadius: "50%",
    objectFit: "cover",
  }
  const avatarSM = {
    width: "3rem",
    height: "3rem",
  }
  const avatarMD = {
    width: "4rem",
    height: "4rem",
  }
  const avatarLG = {
    width: "4.5rem",
    height: "4.5rem",
  }
  const avatarXL = {
    width: "5.5rem",
    height: "5.5rem",
  }
  return (
    <div>
      <SectionHeader
        title="Avatar"
        description="In computing, an avatar (also known as a profile picture or userpic) is a graphical representation of a user or the user's character or persona."
      />
      <ComponentHolder title="Avatar" code={commonStyles}>
        <Avatar
          style={{ commonStyles, avatarSM, avatarMD, avatarLG, avatarXL }}
        />
      </ComponentHolder>
    </div>
  )
}

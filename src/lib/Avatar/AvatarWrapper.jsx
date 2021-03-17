import SectionHeader from "../../components/Section/SectionHeader"
import ComponentHolder from "./../../components/Container/ComponentHolder"
import Avatar from "./Avatar"
export default function AvatarWrapper() {
  const code = `.avatar {
    border-radius: 50%;
    object-fit: cover;
  }
  .avatar-sm {
    width: 3rem;
    height: 3rem;
  }
  .avatar-md {
    width: 4rem;
    height: 4rem;
  }
  .avatar-lg {
    width: 4.5rem;
    height: 4.5rem;
  }
  .avatar-xl {
    width: 5.5rem;
    height: 5.5rem;
  }
  `
  return (
    <div>
      <SectionHeader
        title="Avatar"
        description="In computing, an avatar (also known as a profile picture or userpic) is a graphical representation of a user or the user's character or persona."
      />
      <ComponentHolder title="Avatar" code={code}>
        <Avatar />
      </ComponentHolder>
    </div>
  )
}

import { ComponentHolder, SectionHeader } from "@components"

import Avatar from "./Avatar"

export default function AvatarWrapper() {
  return (
    <div>
      <SectionHeader
        title="Avatar"
        description="In computing, an avatar (also known as a profile picture or userpic) is a graphical representation of a user or the user's character or persona."
      />
      <ComponentHolder title="Avatar" code={"avatar"}>
        <Avatar />
      </ComponentHolder>
    </div>
  )
}

import { ComponentHolder, SectionHeader } from "@components"

import Avatar from "./Avatar"

export default function AvatarWrapper() {
  const code = ` <img
  class="avatar avatar-sm"
  src="https://bit.ly/kent-c-dodds"
  alt="Kent Bhaiyya"
/>
<img
  src="https://bit.ly/kent-c-dodds"
  class="avatar avatar-md"
  alt="cat"
/>
<img
  class="avatar avatar-lg"
  src="https://bit.ly/kent-c-dodds"
  alt="cat"
/>
<img
  class="avatar avatar-xl"
  src="https://bit.ly/kent-c-dodds"
  alt="cat"
/>`
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

import { ComponentHolder, SectionHeader } from "@components"

import { OutlineBadges, SolidBadges } from "./Badges"

export default function BadgesWrapper() {
  return (
    <div>
      <SectionHeader
        title="Badges"
        description="Badges are used to highlight an item's status for quick recognition."
      />
      <ComponentHolder title="Badges" code={"badge-solid"}>
        <SolidBadges />
      </ComponentHolder>
      <ComponentHolder title="Outline Badges" code={"badge-outline"}>
        <OutlineBadges />
      </ComponentHolder>
    </div>
  )
}

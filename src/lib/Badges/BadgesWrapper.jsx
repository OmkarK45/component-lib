import { ComponentHolder, SectionHeader } from "@components"

import { OutlineBadges, SolidBadges } from "./Badges"

export default function BadgesWrapper() {
  const solidBadges = ` <span class="badge badge-success">Success</span>
  <span class="badge badge-error">Error</span>
  <span class="badge badge-warning">Warning</span>
  <span class="badge badge-info">Info</span>`

  const outLineBadges = ` <span class="badge badge-outline-success">Success</span>
  <span class="badge badge-outline-error">Error</span>
  <span class="badge badge-outline-warning">Warning</span>
  <span class="badge badge-outline-info">Info</span>`
  return (
    <div>
      <SectionHeader
        title="Badges"
        description="Badges are used to highlight an item's status for quick recognition."
      />
      <ComponentHolder title="Badges" code={solidBadges}>
        <SolidBadges />
      </ComponentHolder>
      <ComponentHolder title="Outline Badges" code={outLineBadges}>
        <OutlineBadges />
      </ComponentHolder>
    </div>
  )
}

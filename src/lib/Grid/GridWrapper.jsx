import { ComponentHolder, SectionHeader } from "@components"
import { HalfGrid } from "./Grid"

export default function GridWrapper() {
  return (
    <div>
      <SectionHeader
        title="Grid"
        description="One of the most important components. Grids are used for putting"
      />
      <ComponentHolder title="50-50 Layout">
        <HalfGrid />
      </ComponentHolder>
    </div>
  )
}

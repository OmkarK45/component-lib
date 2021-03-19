import { ComponentHolder, SectionHeader } from "@components"
import { Ratings } from "./Ratings"

export default function RatingsWrapper() {
  return (
    <div>
      <SectionHeader
        title="Ratings"
        description="Often denoted as stars, ratings indicate quality of a particular entity. Mostly used on eCommerce websites."
      />
      <ComponentHolder title="Ratings" code={"ratings"}>
        <Ratings />
      </ComponentHolder>
    </div>
  )
}

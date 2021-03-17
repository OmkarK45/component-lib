import { ComponentHolder, SectionHeader } from "@components"

import { CardWithImage, CardWithImage2 } from "./Card"

export default function CardsWrapper() {
  return (
    <div>
      <SectionHeader
        title="Cards"
        description="Used to display information to users, with button to trigger actions. These are very versatile and often found in eCommerce websites and blogs."
      />
      <ComponentHolder title="Card with image and action button" code="tbd">
        <div className="flex flex-col space-y-5 space-x-6 sm:space-y-3 items-center sm:justify-center sm:flex-row">
          <CardWithImage image={true} />
          <CardWithImage2 />
        </div>
      </ComponentHolder>
      <ComponentHolder
        title="Card with text and action button"
        code="work in progress"
      >
        <div className="flex space-x-4 items-center ">
          <CardWithImage image={false} />
        </div>
      </ComponentHolder>
    </div>
  )
}

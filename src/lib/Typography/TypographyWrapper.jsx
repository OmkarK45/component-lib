import { ComponentHolder, SectionHeader } from "@components"
import BlogParagraph, { Headings } from "./Typography"

export default function TypographyWrapper() {
  return (
    <div>
      <SectionHeader
        title="Typography"
        description="One of the crucial aspect when it comes to readability and accessibility. Typography looks like a simple topic but many websites miss the trick."
      />
      <ComponentHolder title="Heading Variations" code={"button-solid"}>
        <Headings />
      </ComponentHolder>
      <ComponentHolder title="Centered text for blogs" code={"button-solid"}>
        <BlogParagraph />
      </ComponentHolder>
    </div>
  )
}

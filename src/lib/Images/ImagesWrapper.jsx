import { ComponentHolder, SectionHeader } from "@components"

import { CenteredImage, RoundedImage } from "./Images"

export default function ImagesWrapper() {
  return (
    <div>
      <SectionHeader
        title="Images"
        description="Images are really important aspect of any webiste."
      />
      <ComponentHolder title="Centered Image :P" code={"images"}>
        <CenteredImage />
      </ComponentHolder>
      <ComponentHolder title="Rounded Image" code={"image-rounded"}>
        <RoundedImage />
      </ComponentHolder>
    </div>
  )
}

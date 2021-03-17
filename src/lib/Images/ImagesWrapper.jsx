import { ComponentHolder, SectionHeader } from "@components"

import { CenteredImage, RoundedImage } from "./Images"

export default function ImagesWrapper() {
  const code = ` <img className="img-center" src="https://via.placeholder.com/150" alt="placeholder" />`
  const roundedImage = `
  <img src="https://via.placeholder.com/150" alt="" className="rounded" />
  `
  return (
    <div>
      <SectionHeader
        title="Images"
        description="Images are really important aspect of any webiste."
      />
      <ComponentHolder title="Centered Image :P" code={code}>
        <CenteredImage />
      </ComponentHolder>
      <ComponentHolder title="Rounded Image" code={code}>
        <RoundedImage />
      </ComponentHolder>
    </div>
  )
}

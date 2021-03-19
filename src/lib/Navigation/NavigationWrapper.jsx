import { ComponentHolder, SectionHeader } from "@components"
import { Navigation, NavigationLinksCenter } from "./Navigation"

export default function NavigationWrapper() {
  return (
    <div>
      <SectionHeader
        title="Navigation"
        description="It is used to navigation across your application and is usually placed at top of the page."
      />
      <ComponentHolder title="Simple navigation with logo" code={"simple-nav"}>
        <Navigation />
      </ComponentHolder>
      <ComponentHolder title="Buttons with outline" code={"centered-nav"}>
        <NavigationLinksCenter />
      </ComponentHolder>
    </div>
  )
}

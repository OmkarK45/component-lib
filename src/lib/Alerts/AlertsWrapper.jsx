import { ComponentHolder, SectionHeader } from "@components"

import { OutlineAlert, SolidAlert } from "./Alerts"

const AlertsWrapper = () => {
  return (
    <div>
      <SectionHeader
        title="Alerts"
        description="Alerts are used to communicate a state that affects a system, feature or page.."
      />
      <ComponentHolder title="Alerts with solid color" code={"alert-solid"}>
        <SolidAlert />
      </ComponentHolder>
      <ComponentHolder title="Alerts with border" code={"alert-outline"}>
        <OutlineAlert />
      </ComponentHolder>
    </div>
  )
}

export default AlertsWrapper

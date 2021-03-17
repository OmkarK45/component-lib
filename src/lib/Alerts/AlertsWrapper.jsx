import { ComponentHolder, SectionHeader } from "@components"

import { OutlineAlert, SolidAlert } from "./Alerts"

const AlertsWrapper = () => {
  const code = ` 
  <div class="alert alert-solid-success">
    File was uploaded to the server
  </div>
  <div class="alert alert-solid-error">
    Aw Snap, something bad happened.
  </div>
  <div class="alert alert-solid-warning">
    All of the data will be wiped.
  </div>
  <div class="alert alert-solid-info">
    Your account will expire on 29 Feb
  </div>`
  const alertBorder = `
  <div class="alert alert-outline-success">
  File was uploaded to the server
</div>
<div class="alert alert-outline-error">
  Aw Snap, something bad happened.
</div>
<div class="alert alert-outline-warning">
  All of the data will be wiped.
</div>
<div class="alert alert-outline-info">
  Your account will expire on 29 Feb
</div>
  `
  return (
    <div>
      <SectionHeader
        title="Alerts"
        description="Alerts are used to communicate a state that affects a system, feature or page.."
      />
      <ComponentHolder title="Alerts with solid color" code={code}>
        <SolidAlert />
      </ComponentHolder>
      <ComponentHolder title="Alerts with border" code={alertBorder}>
        <OutlineAlert />
      </ComponentHolder>
    </div>
  )
}

export default AlertsWrapper

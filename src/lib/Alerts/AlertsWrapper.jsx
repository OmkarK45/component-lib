import ComponentHolder from "../../components/Container/ComponentHolder"
import SectionHeader from "../../components/Section/SectionHeader"
import { OutlineAlert, SolidAlert } from "./Alerts"

const AlertsWrapper = () => {
  const code = `.alert {
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
}
.alert-solid-success {
  color: white;
  background-color: #38A169;
}
.alert-solid-error {
  color: white;
  background-color: #E53E3E;
}
.alert-solid-warning {
  color: white;
  background-color: #DD6B20;
}
.alert-solid-info {
  color: white;
  background-color: #3182CE;
}
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
      <ComponentHolder title="Alerts with border" code={code}>
        <OutlineAlert />
      </ComponentHolder>
    </div>
  )
}

export default AlertsWrapper

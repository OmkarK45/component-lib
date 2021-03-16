import ComponentHolder from "../../components/Container/ComponentHolder"
import SectionHeader from "../../components/Section/SectionHeader"
import Alert from "./Alerts"

const AlertsWrapper = () => {
  const commonStyles = {
    padding: "1rem",
    borderRadius: "10px",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    display: "flex",
    alignItems: "center",
  }
  const iconSize = {
    fontSize: "2rem",
  }
  const successAlert = {
    backgroundColor: "#FEEBC8",
  }
  const errorAlert = {
    backgroundColor: "#FED7D7",
  }
  const warningAlert = {
    backgroundColor: "#FEEBC8",
  }
  const infoAlert = {
    backgroundColor: "#BEE3F8",
  }
  return (
    <div>
      <SectionHeader
        title="Alerts"
        description="Alerts are used to communicate a state that affects a system, feature or page.."
      />
      <ComponentHolder title="Button" code={commonStyles}>
        <Alert
          style={{
            commonStyles,
            successAlert,
            errorAlert,
            warningAlert,
            infoAlert,
            iconSize,
          }}
        />
      </ComponentHolder>
    </div>
  )
}

export default AlertsWrapper

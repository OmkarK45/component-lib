import ComponentHolder from "../../components/Container/ComponentHolder"
import SectionHeader from "../../components/Section/SectionHeader"
import Button from "./Button"

export default function ButtonWrapper() {
  const commonStyles = {
    backgroundColor: "#FD4D4D",
    color: "white",
    borderRadius: "10px",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  }
  const buttonSM = {
    padding: "0.5rem 1rem",
  }
  const buttonR = {
    padding: "0.7rem 1.4rem",
  }
  const buttonLG = {
    padding: "0.9rem 1.8rem",
  }
  const buttonXL = {
    padding: "1rem 2rem",
  }
  return (
    <div>
      <SectionHeader
        title="Buttons"
        description="The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
      />
      <ComponentHolder title="Button" code={commonStyles}>
        <Button
          style={{ commonStyles, buttonSM, buttonR, buttonLG, buttonXL }}
        />
      </ComponentHolder>
    </div>
  )
}

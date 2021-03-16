import ComponentHolder from "../../components/Container/ComponentHolder"
import SectionHeader from "../../components/Section/SectionHeader"
import Button from "./Button"

export default function ButtonWrapper() {
  return (
    <div>
      <SectionHeader
        title="Buttons"
        description="The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
      />
      <ComponentHolder component={<Button />} />
    </div>
  )
}

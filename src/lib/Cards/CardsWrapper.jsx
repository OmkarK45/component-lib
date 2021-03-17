import ComponentHolder from "../../components/Container/ComponentHolder"
import SectionHeader from "../../components/Section/SectionHeader"
import { Card } from "./Card"

export default function CardsWrapper() {
  return (
    <div>
      <SectionHeader
        title="Buttons"
        description="The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
      />
      <ComponentHolder title="Solid Buttons">
        <Card />
      </ComponentHolder>
    </div>
  )
}

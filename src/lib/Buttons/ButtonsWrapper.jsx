import "./Button.scss"
import { Button, OutlineButton } from "./Button"
import { ComponentHolder, SectionHeader } from "@components"

export default function ButtonWrapper() {
  return (
    <div>
      <SectionHeader
        title="Buttons"
        description="The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
      />
      <ComponentHolder title="Solid Buttons" code={"button-solid"}>
        <Button />
      </ComponentHolder>
      <ComponentHolder title="Buttons with outline" code={"button-outline"}>
        <OutlineButton />
      </ComponentHolder>
    </div>
  )
}

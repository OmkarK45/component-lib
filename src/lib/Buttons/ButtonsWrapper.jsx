import "./Button.scss"
import { Button, OutlineButton } from "./Button"
import { ComponentHolder, SectionHeader } from "@components"

export default function ButtonWrapper() {
  const solidBtn = `<button class="btn btn-sm">Button</button>
  <button class="btn btn-r">Button</button>
  <button class="btn btn-lg">Button</button>
  <button class="btn btn-xl">Button</button>`

  const outlineButtonCode = `
  <button class="btn btn-outline btn-sm">Button</button>
      <button class="btn btn-outline btn-r">Button</button>
      <button class="btn btn-outline btn-lg">Button</button>
      <button class="btn btn-outline btn-xl">Button</button>`
  return (
    <div>
      <SectionHeader
        title="Buttons"
        description="The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
      />
      <ComponentHolder title="Solid Buttons" code={solidBtn}>
        <Button />
      </ComponentHolder>
      <ComponentHolder title="Buttons with outline" code={outlineButtonCode}>
        <OutlineButton />
      </ComponentHolder>
    </div>
  )
}

import { ComponentHolder, SectionHeader } from "@components"
import { Inputs, InputWithIcon } from "./Inputs"

export default function InputWrapper() {
  return (
    <div>
      <SectionHeader
        title="Input"
        description="This component is used to taking user's input in a text, email or password field."
      />
      <ComponentHolder title="Input" code={"inputs"}>
        <Inputs />
      </ComponentHolder>
      <ComponentHolder title="Input with icon">
        <InputWithIcon />
      </ComponentHolder>
    </div>
  )
}

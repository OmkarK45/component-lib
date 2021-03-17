import ComponentHolder from "../../components/Container/ComponentHolder"
import SectionHeader from "../../components/Section/SectionHeader"
import { Button } from "./Button"
import "./Button.scss"
export default function ButtonWrapper() {
  const solidBtn = `
  .btn {
    background-color: #fd4d4d;
    color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .btn-sm {
    padding: 0.5rem 1rem;
  }
  .btn-r {
    padding: 0.7rem 1.4rem;
  }
  .btn-lg {
    padding: 0.9rem 1.8rem;
  }
  .btn-xl {
    padding: 1rem 2rem;
  }
  `
  return (
    <div>
      <SectionHeader
        title="Buttons"
        description="The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."
      />
      <ComponentHolder title="Button" code={solidBtn}>
        <Button />
      </ComponentHolder>
      <ComponentHolder title="Buttons with outline">
        <Button />
      </ComponentHolder>
    </div>
  )
}

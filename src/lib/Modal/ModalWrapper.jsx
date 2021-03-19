import { ComponentHolder, SectionHeader } from "@components"
import { Modal } from "./Modal"

export default function ModalWrapper() {
  return (
    <div>
      <SectionHeader
        title="Modal"
        description="A modal is a dialog box/popup window that is displayed on top of the current page. It's commonly used for confirmation boxes. Forms should not be put in modals."
      />
      <ComponentHolder
        title="Modal with two action buttons [Requires Javascript]"
        code={"modal"}
      >
        <Modal />
      </ComponentHolder>
    </div>
  )
}

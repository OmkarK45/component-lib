import { ComponentHolder, SectionHeader } from "@components"
import { SimpleList, StripedList } from "./Lists"
export default function ListsWrapper() {
  return (
    <div>
      <SectionHeader
        title="Lists"
        description="Lists are used to present list of information in well formed and semantic way. There are three different types of list in HTML and each one has a specific purpose and meaning."
      />
      <ComponentHolder title="Simple list with divider" code={"list-simple"}>
        <SimpleList />
      </ComponentHolder>
      <ComponentHolder
        title="Simple list with alternate strip"
        code={"list-striped"}
      >
        <StripedList />
      </ComponentHolder>
    </div>
  )
}

import { useParams } from "react-router-dom"

export default function Component() {
  const component = useParams("component")
  return (
    <div>
      <div>{component.component}</div>
    </div>
  )
}

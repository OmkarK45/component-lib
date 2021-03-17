import { useParams } from "react-router-dom"
import { Button } from "./../../lib/Buttons/Button"

export default function Component() {
  const component = useParams("component")
  console.log(component.component)
  return (
    <div>
      <div>{component.component}</div>
    </div>
  )
}

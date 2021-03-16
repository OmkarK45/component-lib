import { useParams } from "react-router-dom"

export default function Component() {
  const component = useParams("component")
  console.log(component)
  return <div>{component.component}</div>
}

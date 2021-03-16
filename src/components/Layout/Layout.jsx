import { Header } from "@components"
import { useState } from "react"
import Cards from "../../lib/Cards"
import Container from "../Container/Container"
import { Sidenav } from "../Sidenav"

export default function Layout({ children }) {
  const [hidden, setHidden] = useState(false)
  function handleSetHidden() {
    setHidden((hidden) => !hidden)
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header setHidden={handleSetHidden} />
      <div className="flex bg-white ">
        <Sidenav hidden={hidden} />
        <Container>{children}</Container>
      </div>
    </div>
  )
}

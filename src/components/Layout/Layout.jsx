import { Header } from "@components"
import { useState } from "react"
import { Sidenav } from "../Sidenav"
import Wrapper from "./Wrapper"
import Container from "./../Container/Container"

export default function Layout({ children }) {
  const [hidden, setHidden] = useState(false)
  function handleSetHidden() {
    setHidden((hidden) => !hidden)
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header setHidden={handleSetHidden} />
      <div className="flex bg-white dark:bg-primary-700">
        <Sidenav hidden={hidden} />
        <Container hidden={hidden}>{children}</Container>
      </div>
    </div>
  )
}

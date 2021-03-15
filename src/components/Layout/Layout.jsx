import { Header, Sidenav } from "@components"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Sidenav />
      <div>{children}</div>
    </div>
  )
}

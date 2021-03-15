import { Header, Sidenav } from "@components"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <div>{children}</div>
    </div>
  )
}

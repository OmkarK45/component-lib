import Main from "../Sidenav/Main"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Main>{children}</Main>
    </div>
  )
}

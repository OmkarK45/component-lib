import { Link } from "react-router-dom"
import Toggle from "./../../context/themeToggle"
import { useState } from "react"
import { Sidenav } from "../Sidenav"
export default function Header() {
  const [hidden, setHidden] = useState(false)

  return (
    <div>
      <nav className="bg-primary-800 sticky top-0 z-10">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="lg:hidden">
              <button className="text-white" onClick={() => setHidden(!hidden)}>
                toggle
              </button>
            </div>
            <div className="flex items-center">
              <Link
                to="/"
                className="flex-shrink-0 text-white text-lg font-semibold"
              >
                Doge UI
              </Link>
            </div>
            <div>
              <Toggle />
            </div>
          </div>
        </div>
      </nav>
      <Sidenav hidden={hidden} />
    </div>
  )
}

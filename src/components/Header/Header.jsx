import { Link } from "react-router-dom"
import Toggle from "./../../context/themeToggle"
import { Sidenav } from "../Sidenav"
export default function Header({ hidden, setHidden }) {
  return (
    <div>
      <nav className="bg-white dark:bg-primary-800  sticky top-0 z-10 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="lg:hidden">
              <button className="text-white" onClick={setHidden}>
                toggle
              </button>
            </div>
            <div className="flex items-center">
              <Link
                to="/"
                className="flex-shrink-0 text-primary-900 dark:text-white text-lg font-semibold"
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
    </div>
  )
}

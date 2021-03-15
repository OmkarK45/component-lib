import { Link } from "react-router-dom"
import Toggle from "./../../context/themeToggle"
export default function Header() {
  return (
    <nav className="bg-primary-800">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
  )
}

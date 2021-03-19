import { Link } from "react-router-dom"
import Toggle from "./../../context/themeToggle"
import { AiOutlineMenu } from "react-icons/ai"
export default function Header({ hidden, setHidden }) {
  return (
    <div>
      <nav className="bg-white dark:bg-primary-800  sticky top-0 z-10 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="lg:hidden">
              <button
                className="text-gray-900 p-2 dark:text-white"
                onClick={setHidden}
              >
                <AiOutlineMenu />
              </button>
            </div>
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center flex-shrink-0 text-primary-900 dark:text-white text-lg font-semibold"
              >
                <img src="./logo.svg" alt="Logo" height="40px" width="40px" />
                <h3 className="tracking-tight	">Doge UI</h3>
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

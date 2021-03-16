import { links } from "./links"
import { NavLink } from "react-router-dom"

export default function Sidenav({ hidden }) {
  return (
    <div className="w-full sticky top-24 sm:w-1/6">
      <div
        className={hidden ? "block text-white" : "hidden lg:block text-white"}
      >
        <div className=" bg-white dark:bg-primary-700 shadow-sm">
          <div className="flex flex-col  flex-1  bg-white dark:bg-primary-700">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav
                className=" flex-1 px-2 bg-white dark:bg-primary-700 space-y-1"
                aria-label="Sidebar"
              >
                {links.map(({ to, Icon, name }) => {
                  return (
                    <NavLink
                      activeClassName="bg-primary-100 text-gray-900 dark:text-gray-900 hover:text-primary-900 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm font-bold rounded-md"
                      key={name}
                      to={to}
                      className="text-gray-600 dark:text-gray-50  hover:bg-primary-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    >
                      <Icon fontSize="1rem" className="mr-3 h-6 w-6" />
                      {name}
                    </NavLink>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

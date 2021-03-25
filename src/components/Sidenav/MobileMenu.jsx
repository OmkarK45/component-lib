import { AiOutlineClose } from "react-icons/ai"
import { Transition } from "@headlessui/react"
import { links } from "./links"
import { NavLink } from "react-router-dom"
export default function MobileMenu({ handleSidebar, sidebarOpen }) {
  console.log(sidebarOpen)
  return (
    <div className="md:hidden">
      <div className="fixed inset-0 flex z-40">
        <Transition
          unmount={false}
          show={sidebarOpen}
          onClick={handleSidebar}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0"
        >
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        </Transition>
        <Transition
          show={sidebarOpen}
          unmount={false}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="relative flex-1 flex flex-col max-w-xs w-full bg-white"
        >
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              onClick={handleSidebar}
              data-todo-x-show="sidebarOpen"
              data-todo-at-click="sidebarOpen = false"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Close sidebar</span>
              <AiOutlineClose className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <a href="/get-started">
                <img
                  className="h-8 w-auto"
                  src="/logo-new.svg"
                  alt="Doge Icon"
                />
              </a>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {links.map(({ to, Icon, name }) => {
                return (
                  <NavLink
                    to={to}
                    key={name}
                    activeClassName="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                    className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    {name}
                  </NavLink>
                )
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <a href="/" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                    &copy;2021, Doge-UI
                  </p>
                </div>
              </div>
            </a>
          </div>
        </Transition>
        <div className="flex-shrink-0 w-14"></div>
      </div>
    </div>
  )
}

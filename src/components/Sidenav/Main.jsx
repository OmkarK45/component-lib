import { Transition } from "@headlessui/react"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

import Content from "../Container/Content"
import { links } from "./links"
import MobileMenu from "./MobileMenu"

const Main = ({ children }) => {
  const [sidebarOpen, setsidebarOpen] = useState(false)
  function handleSidebar() {
    setsidebarOpen(false)
  }
  return (
    <>
      <div style={{ minHeight: "640px" }} className="bg-gray-100">
        <div className="h-screen flex overflow-hidden bg-white">
          <Transition show={sidebarOpen}>
            <MobileMenu
              handleSidebar={handleSidebar}
              sidebarOpen={sidebarOpen}
            />
          </Transition>
          <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64">
              <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                  <div className="flex items-center flex-shrink-0 px-4">
                    <Link to="/get-started">
                      <img
                        className="h-8 w-auto"
                        src="/logo-new.svg"
                        alt="Doge Icon"
                      />
                    </Link>
                  </div>
                  <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                    {links.map(({ to, Icon, name }) => {
                      return (
                        <NavLink
                          key={name}
                          to={to}
                          activeClassName="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                          className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        >
                          {name}
                        </NavLink>
                      )
                    })}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <a href="/" className="flex-shrink-0 w-full group block">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                          &copy;2021, Doge-UI
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Content setsidebarOpen={setsidebarOpen}>{children}</Content>
        </div>
      </div>
    </>
  )
}
export default Main

import { useState } from "react"
import MobileMenu from "./MobileMenu"
const Sidebar = (props) => {
  const [sidebarOpen, setsidebarOpen] = useState(false)
  function handleSidebar() {
    setsidebarOpen(false)
  }
  return (
    <>
      <div style={{ minHeight: "640px" }} className="bg-gray-100">
        <div
          className="h-screen flex overflow-hidden bg-white"
          data-todo-x-data="{ sidebarOpen: false }"
          data-todo-at-keydown-window-escape="sidebarOpen = false"
        >
          {sidebarOpen ? <MobileMenu handleSidebar={handleSidebar} /> : null}

          {/* Static sidebar for desktop */}
          <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                  <div className="flex items-center flex-shrink-0 px-4">
                    <img
                      className="h-8 w-auto"
                      src="/logo-new.svg"
                      alt="Doge Icon"
                    />
                  </div>
                  <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                    {/* Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
                    <a
                      href="/"
                      className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    >
                      {/* Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500" */}
                      <svg
                        className="text-gray-500 mr-3 h-6 w-6"
                        data-todo-x-description="Heroicon name: outline/home"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        ></path>
                      </svg>
                      Dashboard
                    </a>

                    <a
                      href="/"
                      className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    >
                      <svg
                        className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                        data-todo-x-description="Heroicon name: outline/users"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                      Team
                    </a>
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
          <div className="flex flex-col w-0 flex-1 overflow-hidden">
            <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
              <button
                onClick={() => setsidebarOpen(true)}
                className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <svg
                  className="h-6 w-6"
                  data-todo-x-description="Heroicon name: outline/menu"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            {/* abstract this into main container */}
            <main
              className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
              tabIndex={0}
              data-todo-x-data=""
              data-todo-x-init="$el.focus()"
            >
              <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    Dashboard
                  </h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  {/* Replace with your content */}
                  <div className="py-4">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                  </div>
                  {/* /End replace */}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
export default Sidebar

import { useState } from "react"
export default function MobileMenu({ handleSidebar }) {
  return (
    <div className="md:hidden">
      <div className="fixed inset-0 flex z-40">
        <div
          onClick={handleSidebar}
          data-todo-x-transition-enter="transition-opacity ease-linear duration-300"
          data-todo-x-transition-enter-start="opacity-0"
          data-todo-x-transition-enter-end="opacity-100"
          data-todo-x-transition-leave="transition-opacity ease-linear duration-300"
          data-todo-x-transition-leave-start="opacity-100"
          data-todo-x-transition-leave-end="opacity-0"
          className="fixed inset-0"
        >
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>
        <div
          data-todo-x-show="sidebarOpen"
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
              {/* replace this with close button */}
              <svg
                className="h-6 w-6 text-white"
                data-todo-x-description="Heroicon name: outline/x"
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
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
              {/* Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
              <a
                href="/"
                className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                {/* Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500" */}
                Dashboard
              </a>

              <a
                href="/"
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                Team
              </a>
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
        </div>
        <div className="flex-shrink-0 w-14">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </div>
    </div>
  )
}

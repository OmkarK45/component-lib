import { HiMenu } from "react-icons/hi"
export default function Content({ children, setsidebarOpen }) {
  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <div className="flex items-center justify-between md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button
          onClick={() => setsidebarOpen(true)}
          className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <HiMenu className="h-6 w-6" />
        </button>

        <img className="h-8 w-auto " src="/logo-new.svg" alt="Doge Icon" />
      </div>
      <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

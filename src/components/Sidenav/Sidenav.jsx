export default function Sidenav() {
  return (
    <>
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow  pt-5 pb-4 bg-primary-800 overflow-y-auto">
          <div className=" flex-grow flex flex-col">
            <nav
              className="flex-1 bg-primary-800 space-y-1"
              aria-label="Sidebar"
            >
              <a
                href="/"
                className="bg-primary-600 text-white border-accent-600 text-accent-600 group flex items-center px-3 py-2  font-medium border-l-4"
              >
                Dashboard
              </a>

              <a
                href="/"
                className="border-transparent text-gray-100 hover:bg-primary-700 hover:text-primary-100 group flex items-center px-3 py-2 font-medium border-l-4"
              >
                Reports
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

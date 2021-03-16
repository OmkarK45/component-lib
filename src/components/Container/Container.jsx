import Cards from "../../lib/Cards"

export default function Container({ children }) {
  return (
    <div>
      <div className="bg-white">
        <div className="px-4 py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </div>
  )
}

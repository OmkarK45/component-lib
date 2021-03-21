import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 | Not found</title>
      </Helmet>
      <div className=" flex items-center justify-center">
        <div className="flex flex-col items-center">
          <img
            src="/logo2.png"
            height="70px"
            width="70px"
            className="mx-auto"
            alt="Doge Logo"
          />
          <h4>404 | Requested page was not found.</h4>
          <Link to="/get-started">
            <button className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

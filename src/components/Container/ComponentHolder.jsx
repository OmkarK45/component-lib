import getURL from "./../../utils/getiFrameURL"
import { FiExternalLink } from "react-icons/fi"
import { useState } from "react"
export default function ComponentHolder({ children, code }) {
  const [showCode, setShowCode] = useState(false)
  return (
    <div className="py-12">
      <div className="bg-white dark:bg-primary-600 dark:text-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between">
          <div>
            <p>Button</p>
          </div>
          <div>
            <button
              onClick={() => setShowCode((showCode) => !showCode)}
              className="flex items-center"
            >
              Code <FiExternalLink className="ml-2" />
            </button>
          </div>
        </div>
        {showCode ? (
          <pre className="bg-primary-800  overflow-x-auto text-gray-200 px-4 py-5 sm:p-6">
            {JSON.stringify(code)}
          </pre>
        ) : (
          <div className="bg-gray-50 dark:bg-primary-700 px-4 py-5 sm:p-6">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
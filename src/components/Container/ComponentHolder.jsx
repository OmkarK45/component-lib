import getURL from "./../../utils/getiFrameURL"
import { FiExternalLink } from "react-icons/fi"
import { useState } from "react"
export default function ComponentHolder({ component, title }) {
  const [showCode, setShowCode] = useState(false)
  return (
    <div className="py-12">
      <div className="bg-white overflow-hidden shadow rounded-lg">
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
          <div className="bg-gray-50 px-4 py-5 sm:p-6">Code Goes here</div>
        ) : (
          <div className="bg-gray-50 px-4 py-5 sm:p-6">{component}</div>
        )}
      </div>
    </div>
  )
}

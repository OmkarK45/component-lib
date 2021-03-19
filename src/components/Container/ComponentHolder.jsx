import getURL from "./../../utils/getiFrameURL"
import { HiOutlineCode, HiOutlineSparkles } from "react-icons/hi"
import { useState } from "react"
import Spinner from "./../ui/Spinner"

export default function ComponentHolder({ children, code, title }) {
  const [showCode, setShowCode] = useState(false)
  const [loading, setLoading] = useState(true)
  const handleLoading = () => {
    setLoading(false)
  }
  return (
    <div className="py-12">
      <div className="bg-white dark:bg-primary-600 dark:text-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between">
          <div>
            <p>{title}</p>
          </div>
          <div>
            <button
              onClick={() => setShowCode((showCode) => !showCode)}
              className="flex items-center"
            >
              {showCode ? (
                <>
                  Preview <HiOutlineSparkles className="ml-2" />
                </>
              ) : (
                <>
                  Code <HiOutlineCode className="ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
        {showCode ? (
          <pre className="bg-primary-800 w-full overflow-x-auto text-gray-200 px-4 py-5 sm:p-6">
            {/* {code} */}
            {code && loading ? (
              <div className="flex items-center justify-center">
                <Spinner /> Loading snippet...
              </div>
            ) : null}
            {code ? (
              <iframe
                title="code"
                loading="lazy"
                onLoad={handleLoading}
                className="w-full"
                src={getURL(code)}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            ) : (
              "No code snippet available."
            )}
          </pre>
        ) : (
          <div className="bg-gray-100 dark:bg-primary-700 px-4 py-5 sm:p-6 overflow-x-auto">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

import { SectionHeader } from "@components"
import { HiDownload } from "react-icons/hi"
import ColorPalette from "./ColorPalette"
export default function GetStarted() {
  return (
    <div>
      <SectionHeader
        title="Get Started with Doge UI"
        description="Learn how to configure Doge-UI in your project"
      />
      <div className=" py-12 max-w-7xl mx-auto ">
        <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Static Websites
            </h3>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">
              Simply click the download button and paste the file in your css
              directory. Don't forget to set the link attribute !
            </p>
            <input
              type="text"
              className="shadow-sm py-2 px-2 border bg-white mt-3 border-gray-200 font-mono rounded-md"
              readOnly
              value={`<link href="path/to/dogeUI.css" rel="stylesheet" />`}
            />
          </div>
          <div className="mt-3 flex sm:mt-0 sm:ml-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Download (7.26 KB)
            </button>
            <button
              type="button"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <HiDownload className="text-lg mr-2" />
              Download (minified) (5.59 KB)
            </button>
          </div>
        </div>
      </div>

      <div className=" max-w-7xl mx-auto ">
        <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              React/NextJS Project
            </h3>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">
              Import Doge-UI in your <code>index.js (React)</code> or{" "}
              <code>_app.js (NextJS)</code> file as follows
            </p>
          </div>
        </div>
        <pre className="bg-primary-800 rounded-md  overflow-x-auto text-gray-200 px-4 py-5 sm:p-6">
          {` // pages/_app.js
    import 'path/to/doge-ui.css'

    function MyApp({ Component, pageProps }) {
      return <Component {...pageProps} />
    }

    export default MyApp`}
        </pre>
      </div>

      <div className="py-12 max-w-7xl mx-auto ">
        <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Colors and Fonts
            </h3>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">
              Doge UI recommends Inter{" "}
              <a
                target="_blank noreferrer"
                href="https://fonts.google.com/specimen/Inter"
              >
                (Learn More). {"  "}
              </a>
              We have couple of shades of gray and some primary colors.
            </p>
          </div>
        </div>
        <div className="mt-2 overflow-x-auto">
          <ColorPalette />
        </div>
      </div>
    </div>
  )
}

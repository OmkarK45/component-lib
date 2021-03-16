import getURL from "./../../utils/getiFrameURL"
export default function ComponentHolder({ component, title }) {
  return (
    <div className="  py-12 ">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">Button</div>
        <div className="bg-gray-50 px-4 py-5 sm:p-6">
          <iframe
            title={title}
            src={getURL(component)}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  )
}

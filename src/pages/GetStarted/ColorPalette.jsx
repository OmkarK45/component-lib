export default function ColorPalette() {
  return (
    <>
      <p>Gray</p>
      <div className="flex space-x-2">
        <div className="px-8 py-6 rounded-md bg-primary-100"></div>
        <div className="px-8 py-6 rounded-md bg-primary-200"></div>
        <div className="px-8 py-6 rounded-md bg-primary-300"></div>
        <div className="px-8 py-6 rounded-md bg-primary-600"></div>
        <div className="px-8 py-6 rounded-md bg-primary-700"></div>
        <div className="px-8 py-6 rounded-md bg-primary-800"></div>
        <div className="px-8 py-6 rounded-md bg-primary-900"></div>
      </div>
      <div className="mt-5">
        <p>Some basic colors</p>
        <div className="flex space-x-2">
          <div
            className="px-8 py-6  rounded-md"
            style={{ backgroundColor: "#fde24f" }}
          ></div>
          <div
            className="px-8 py-6 rounded-md"
            style={{ backgroundColor: "#ff5470" }}
          ></div>
          <div
            className="px-8 py-6 rounded-md"
            style={{ backgroundColor: "#38a169" }}
          ></div>
          <div
            className="px-8 py-6 rounded-md"
            style={{ backgroundColor: "#00214d" }}
          ></div>
        </div>
      </div>
    </>
  )
}

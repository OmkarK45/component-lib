import "./Alerts.scss"

export const SolidAlert = () => {
  return (
    <div className="flex flex-col  space-y-4">
      <div className="alert alert-solid-success dark:text-black">
        File was uploaded to the server
      </div>
      <div className="alert alert-solid-error dark:text-black">
        Aw Snap, something bad happened.
      </div>
      <div className="alert alert-solid-warning dark:text-black">
        All of the data will be wiped.
      </div>
      <div className="alert alert-solid-info dark:text-black">
        Your account will expire on 29 Feb
      </div>
    </div>
  )
}
export const OutlineAlert = () => {
  return (
    <div className="flex flex-col  space-y-4">
      <div className="alert alert-outline-success dark:text-black">
        File was uploaded to the server
      </div>
      <div className="alert alert-outline-error dark:text-black">
        Aw Snap, something bad happened.
      </div>
      <div className="alert alert-outline-warning dark:text-black">
        All of the data will be wiped.
      </div>
      <div className="alert alert-outline-info dark:text-black">
        Your account will expire on 29 Feb
      </div>
    </div>
  )
}

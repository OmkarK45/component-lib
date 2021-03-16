import {
  AiFillWarning,
  AiFillInfoCircle,
  AiFillCheckCircle,
} from "react-icons/ai"
import { FaTimesCircle } from "react-icons/fa"

const Alert = ({ code, style }) => {
  return (
    <div className="flex flex-col  space-y-4">
      <div style={{ ...style.commonStyles, ...style.successAlert }}>
        <AiFillCheckCircle fill="#38A169" /> File was uploaded to the server
      </div>
      <div style={{ ...style.commonStyles, ...style.errorAlert }}>
        <FaTimesCircle fill="#E53E3E" /> Aw Snap, something bad happened.
      </div>
      <div style={{ ...style.commonStyles, ...style.warningAlert }}>
        <AiFillWarning fill="#DD6B20" /> All of the data will be wiped.
      </div>
      <div style={{ ...style.commonStyles, ...style.infoAlert }}>
        <AiFillInfoCircle fill="#3182CE" /> Your account will expire on 29 Feb
      </div>
    </div>
  )
}

export default Alert

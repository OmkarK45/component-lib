import "./Modal.scss"
export function Modal() {
  return (
    <div className="modal">
      <div className="modal-title">
        <h4>Delete Account ?</h4>
      </div>
      <div className="modal-body">
        All your data will be wiped. This action cannot be undone.
      </div>
      <div className="modal-footer">
        <button className="btn btn-outline btn-sm">Cancel</button>
        <button className="btn btn-solid btn-sm">Confirm</button>
      </div>
    </div>
  )
}

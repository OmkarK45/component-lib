import "./Badges.scss"
export function SolidBadges() {
  return (
    <div className="flex space-x-4 items-center flex-wrap">
      <span className="badge badge-success">Success</span>
      <span className="badge badge-error">Error</span>
      <span className="badge badge-warning">Warning</span>
      <span className="badge badge-info">Info</span>
    </div>
  )
}

export function OutlineBadges() {
  return (
    <div className="flex space-x-4 items-center flex-wrap">
      <span className="badge badge-outline-success">Success</span>
      <span className="badge badge-outline-error">Error</span>
      <span className="badge badge-outline-warning">Warning</span>
      <span className="badge badge-outline-info">Info</span>
    </div>
  )
}

import "./Navigation.scss"
export function Navigation() {
  return (
    <nav className="nav dark:bg-primary-600">
      <div className="navbar-brand">
        <h3>Company</h3>
      </div>
      <ul className="navbar-links">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <button className="btn btn-sm nav-item">Contact</button>
      </ul>
    </nav>
  )
}
export function NavigationLinksCenter() {
  return (
    <nav className="nav">
      <div className="navbar-brand">
        <h3>Company</h3>
      </div>
      <ul className="navbar-links">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Pricing</li>
      </ul>
      <div>
        <button className="btn btn-sm nav-item">Contact</button>
      </div>
    </nav>
  )
}

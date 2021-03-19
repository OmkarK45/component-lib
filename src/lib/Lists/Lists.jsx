import "./Lists.scss"
export function SimpleList() {
  return (
    <div className="list-container">
      <ul className="list">
        <li className="list-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
        <li className="list-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
        <li className="list-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
        <li className="list-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
      </ul>
    </div>
  )
}
export function StripedList() {
  return (
    <div className="list-container">
      <ul className="list list-striped">
        <li className="list-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
        <li className="list-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
        <li className="list-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
        <li className="list-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        </li>
      </ul>
    </div>
  )
}

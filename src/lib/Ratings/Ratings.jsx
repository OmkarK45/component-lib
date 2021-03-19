import "./Ratings.scss"
import { ImStarEmpty, ImStarFull, ImStarHalf } from "react-icons/im"
export function Ratings() {
  return (
    <ul className="rating-container">
      <li className="rating-star">
        <ImStarFull fill="#d4af37" />
      </li>
      <li className="rating-star">
        <ImStarFull fill="#d4af37" />
      </li>
      <li className="rating-star">
        <ImStarFull fill="#d4af37" />
      </li>
      <li className="rating-star">
        <ImStarHalf fill="#d4af37" />
      </li>
      <li className="rating-star">
        <ImStarEmpty fill="#d4af37" />
      </li>
    </ul>
  )
}

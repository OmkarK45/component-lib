import { HiDotsVertical } from "react-icons/hi"
import "./Card.scss"
export function CardWithImage({ image }) {
  return (
    <div className="card">
      {image ? <img src="https://placekitten.com/250/150" alt="Cat" /> : null}
      <div className="card-body">
        <h4>Card Title</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          natus veniam animi, reprehenderit tempora quam perspiciatis id nostrum
          neque? Consequatur.
        </p>
        <button>Read More...</button>
      </div>
    </div>
  )
}
export function CardWithImage2() {
  return (
    <div className="card card-img-side">
      <img src="https://placekitten.com/150/200" alt="" />
      <div className="card-body">
        <h4>Card Title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, id
          fuga. At corrupti laborum sit, hic, quis numquam odio, cumque aliquam
          unde fugiat molestias aliquid eaque fugit a iure iste!
        </p>
        <button>Read More</button>
      </div>
    </div>
  )
}

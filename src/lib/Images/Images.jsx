import "./Images.scss"
export function CenteredImage() {
  return (
    <img
      className="img-wrapper"
      src="https://via.placeholder.com/150"
      alt="placeholder"
    />
  )
}
export function RoundedImage() {
  return (
    <div>
      <img src="https://via.placeholder.com/150" alt="" className="rounded" />
    </div>
  )
}

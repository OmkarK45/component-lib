import "./Button.scss"
export function Button({ code, style }) {
  console.log(style)
  return (
    <div className="flex space-x-4 items-center overflow-x-auto">
      <button className="btn btn-sm">Button</button>
      <button className="btn btn-r">Button</button>
      <button className="btn btn-lg">Button</button>
      <button className="btn btn-xl">Button</button>
    </div>
  )
}

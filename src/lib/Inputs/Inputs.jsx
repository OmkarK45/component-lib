import "./Inputs.scss"
import { AiOutlineMail } from "react-icons/ai"
export function Inputs() {
  return (
    <div className="flex flex-col space-x-1 items-start">
      <label className="my-2" htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        className="input"
        placeholder="you@example.com"
        autoComplete="off"
      />
      <label className="my-2" htmlFor="username">
        Username
      </label>
      <input
        id="username"
        type="text"
        className="input"
        placeholder="John Doe"
        autoComplete="off"
      />
      <label className="my-2" htmlFor="password">
        Password
      </label>
      <input
        id="password"
        type="password"
        className="input"
        placeholder="your password"
        autoComplete="off"
      />
    </div>
  )
}
export function InputWithIcon() {
  return (
    <>
      <p>Coming soon...</p>
    </>
  )
}

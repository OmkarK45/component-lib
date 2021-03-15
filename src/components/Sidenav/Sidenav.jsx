import { useState } from "react"
export default function Sidenav({ hidden }) {
  console.log(hidden)
  return (
    <>
      <p className={hidden ? "block text-white" : "hidden lg:block text-white"}>
        IM SIDEBAR
      </p>
    </>
  )
}

import React from "react"
import MenuProfile from "./component/MenuProfile"
import { Outlet } from "react-router-dom"

export default function ProfilePages() {
  return (
    <div className="mx-16 grid grid-cols-12 pt-16">
      <div className="col-span-4 px-8">
        <MenuProfile />
      </div>
      <div className="col-span-8 min-h-[400px] px-8">
        <Outlet />
      </div>
    </div>
  )
}

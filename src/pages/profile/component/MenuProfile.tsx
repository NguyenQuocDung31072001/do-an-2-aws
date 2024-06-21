import React from "react"
import { NavLink } from "react-router-dom"
import { PathRouter } from "../../../constant/path.router"

const options = [
  {
    label: "Cập nhật thông tin",
    link: PathRouter.PROFILE,
  },
  {
    label: "Đơn mua",
    link: PathRouter.PROFILE_PURCHASES.split(
      "/",
    )[2],
  },
  {
    label: "Đổi mật khẩu",
    link: PathRouter.PROFILE_CHANGE_PASSWORD.split(
      "/",
    )[2],
  },
  // {
  //   label: "Đăng xuất",
  //   link: PathRouter.LOGOUT,
  // },
]
export default function MenuProfile() {
  const renderNavLinkWithStyle = (
    label: string,
    link: string,
  ) => (
    <NavLink
      key={label + link}
      to={link}
      end
      className={({ isActive, isPending }) => {
        return `border-b-[1px] border-primaryRed/20  px-4 py-2  ${
          isActive
            ? "bg-primaryRed text-white"
            : ""
        }`
      }}
    >
      {label}
    </NavLink>
  )
  return (
    <div className="flex flex-col overflow-hidden rounded-[10px] border-[1px] border-primaryRed/20">
      {options.map((option) => {
        return renderNavLinkWithStyle(
          option.label,
          option.link,
        )
      })}
    </div>
  )
}

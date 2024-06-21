import React from "react"
//assets
import Logo from "../../assets/logo-with-text.svg"
//component

//framer-motion
import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"

//mocks
import { MainHeaderContextProvider } from "../../context/MainHeaderContext"
import { useNavigate } from "react-router-dom"
import { PathRouter } from "../../constant/path.router"
import ElementNavigation from "./component/ElementNavigation"
import SearchHeader from "./component/SearchHeader"
import UserIcon from "./component/UserIcon"

export default function MainHeader() {
  const isUserLogin = Boolean(
    window.localStorage.getItem("email"),
  )

  //useState
  const [positionHeader, setPositionHeader] =
    React.useState("0px")
  //hook
  const navigate = useNavigate()

  const { scrollY } = useScroll()
  useMotionValueEvent(
    scrollY,
    "change",
    (latest) => {
      if (latest > 200) {
        setPositionHeader("-80px")
      } else {
        setPositionHeader("0px")
      }
    },
  )

  return (
    <MainHeaderContextProvider>
      <motion.div
        animate={{ translateY: positionHeader }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 z-40 flex w-full flex-col items-center justify-center bg-white"
      >
        <div
          className="py-4"
          onClick={() =>
            navigate(PathRouter.HOME)
          }
        >
          <img
            src={Logo}
            className="h-[50px] cursor-pointer object-cover"
          />
        </div>
        <div className="absolute right-20 top-5 flex ">
          <SearchHeader />
          {isUserLogin && <UserIcon />}
          {!isUserLogin && (
            <i
              className="fas fa-sign-in-alt mx-1 cursor-pointer rounded-[50%] bg-primaryYellow p-3 text-[16px] font-bold text-primaryRed duration-500 hover:bg-primaryRed  hover:text-primaryYellow"
              onClick={() =>
                navigate(PathRouter.LOGIN)
              }
            ></i>
          )}

          <i
            className="fas fa-shopping-cart mx-1 cursor-pointer rounded-[50%] bg-primaryRed p-3 text-[16px] font-bold text-primaryYellow duration-500 hover:bg-primaryYellow hover:text-primaryRed"
            onClick={() =>
              navigate(PathRouter.CART)
            }
          ></i>
        </div>
        <div className="flex h-[50px] w-full items-center justify-between px-44">
          <ElementNavigation
            title="TRANG CHỦ"
            path={PathRouter.HOME}
          />
          <ElementNavigation
            title="GIỚI THIỆU"
            path={PathRouter.ABOUT}
          />
          <ElementNavigation
            title="SẢN PHẨM"
            path={PathRouter.PRODUCT}
          />
          <ElementNavigation
            title="CẨM NANG"
            path={PathRouter.HANDBOOK}
          />
        </div>
      </motion.div>
    </MainHeaderContextProvider>
  )
}

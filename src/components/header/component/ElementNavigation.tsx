import React from "react"
import {
  Link,
  useLocation,
} from "react-router-dom"
import { motion } from "framer-motion"

interface IProps {
  title: string
  path: string
}
export default function ElementNavigation({
  title,
  path,
}: IProps) {
  const location = useLocation()

  const [isEnter, setIsEnter] =
    React.useState<boolean>(false)

  const isSelected =
    isEnter || location.pathname === path
  return (
    <Link to={path}>
      <div
        className="flex w-[150px] translate-y-[10px] flex-col items-center justify-center"
        onMouseEnter={() => setIsEnter(true)}
        onMouseLeave={() => setIsEnter(false)}
      >
        <motion.div
          className={`z-10 translate-y-[50%] p-0 font-serif font-bold`}
          initial={
            isSelected
              ? { color: "#d4aa5f" }
              : { color: "#841206" }
          }
          animate={
            isSelected
              ? { color: "#841206" }
              : { color: "#d4aa5f" }
          }
        >
          {title}
        </motion.div>
        <motion.div
          className={`z-0 h-10 w-10 translate-y-[-50%] rounded-full `}
          initial={
            isSelected
              ? { backgroundColor: "white" }
              : {
                  backgroundColor: "#d4aa5f",
                  opacity: 0.1,
                }
          }
          animate={
            isSelected
              ? {
                  backgroundColor: "#d4aa5f",
                  opacity: 0.1,
                }
              : { backgroundColor: "white" }
          }
        ></motion.div>
      </div>
    </Link>
  )
}

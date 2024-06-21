import React from "react"
interface IPropsLine {
  width: string
  height: string
  color: string
  customClassName?: string
}
export default function Line({
  width,
  height,
  color,
  customClassName,
}: IPropsLine) {
  const style = customClassName
    ? customClassName
    : `w-[${width}] h-[${height}]`
  return <div className={style}></div>
}

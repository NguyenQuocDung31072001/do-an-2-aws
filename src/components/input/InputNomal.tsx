import React from "react"
import { HTMLInputTypeAttribute } from "react"

interface IPropsInputNormal {
  type: HTMLInputTypeAttribute
  value: string
  setValue: React.Dispatch<
    React.SetStateAction<string>
  >
  placeholder?: string
  disable?: boolean
  height?: string
  width?: string
  ringColor?: string
  borderColor?: string
  textColor?: string
}
export default function InputNormal({
  type,
  value,
  setValue,
  placeholder,
  disable = false,
  height = "56px",
  width = "full",
  ringColor = "red-300",
  borderColor = "red-500",
  textColor = "gray-800",
}: IPropsInputNormal) {
  return (
    <div
      className={`h-${height} relative flex w-[100%] justify-center`}
    >
      <input
        type={type}
        className={`w-${width} rounded-[5px] border-[1px] border-${borderColor} py-2 px-3 pb-1 text-${textColor} duration-150 focus:outline-none focus:ring-4 focus:ring-primaryRed/30`}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        disabled={disable}
      />
    </div>
  )
}

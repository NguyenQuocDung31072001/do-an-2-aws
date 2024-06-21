import React from "react"
import { HTMLInputTypeAttribute } from "react"

interface IPropsInputWithOutLineAndIcon {
  type: HTMLInputTypeAttribute
  value: string
  setValue: React.Dispatch<
    React.SetStateAction<string>
  >
  placeholder?: string
}
export default function InputWithOutlineAndIcon({
  type,
  value,
  setValue,
  placeholder,
}: IPropsInputWithOutLineAndIcon) {
  return (
    <div className="relative flex h-10 w-[100%] items-center justify-center">
      <input
        type={type}
        className="w-full rounded-tl-[5px] rounded-bl-[5px] border-[1px] border-red-500 py-2 px-3 text-[16px] text-gray-800 duration-150 focus:outline-none focus:ring-4 focus:ring-red-300/60"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
      <i className="fas fa-search cursor-pointer rounded-tr-[10px] rounded-br-[10px] border-[1px]  border-gray-400 p-3 text-[18px] font-bold text-gray-500 duration-300 hover:bg-gray-400 hover:text-white"></i>
    </div>
  )
}

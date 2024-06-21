import React from "react"
import { HTMLInputTypeAttribute } from "react"

interface IPropsInputWithOutLine {
  type: HTMLInputTypeAttribute
  name: string
  value: string
  setValue: React.Dispatch<
    React.SetStateAction<string>
  >
}
export default function InputWithOutline({
  type,
  name,
  value,
  setValue,
}: IPropsInputWithOutLine) {
  const [isFocused, setIsFocused] =
    React.useState<boolean>(false)

  return (
    <div className="relative flex h-14 w-[100%] justify-center">
      <label
        className={`absolute top-4 left-3 text-sm transition-all duration-300 ${
          isFocused || value
            ? "-mt-3 text-[12px] text-gray-400"
            : "text-[18px] text-black"
        }`}
        htmlFor="name"
        onClick={() => setIsFocused(true)}
      >
        {name}
      </label>
      <input
        type={type}
        className="w-full rounded-[5px] border-[1px] border-red-500 py-2 px-3 pb-1 text-gray-800 duration-150 focus:outline-none focus:ring-4 focus:ring-red-300/60"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  )
}

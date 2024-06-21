import React from "react"

interface IProps {
  content: string
  setContent: React.Dispatch<
    React.SetStateAction<string>
  >
}
export default function TextAreaWithOutline({
  content,
  setContent,
}: IProps) {
  const [isFocus, setIsFocus] =
    React.useState<boolean>(false)

  return (
    <div className="relative w-full">
      <div
        className={`absolute left-1  ${
          isFocus
            ? "top-1 text-[12px] text-gray-500"
            : "top-2 text-[14px]"
        } z-10 bg-white`}
      >
        Nhận xét
      </div>
      <textarea
        onChange={(e) =>
          setContent(e.target.value)
        }
        value={content}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
        className="w-full rounded-[10px] border-2 border-primaryRed/50 px-1 pt-5 pb-2 duration-200 focus:outline-none focus:ring-4 focus:ring-primaryRed/30"
      ></textarea>
    </div>
  )
}

import React from "react"

interface IProps {
  value: number
  setValue: React.Dispatch<
    React.SetStateAction<number>
  >
}
export default function InputBasic({
  value,
  setValue,
}: IProps) {
  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const input = event.target.value

    if (Number(input)) {
      setValue(Number(input))
    }
    if (input === "") {
      setValue(0)
    }
  }
  return (
    <div>
      <input
        type="text"
        className=" w-[50px] px-2 text-center focus:outline-primaryRed"
        value={value}
        onChange={handleOnChange}
      />
    </div>
  )
}

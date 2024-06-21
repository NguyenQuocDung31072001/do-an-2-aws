import React from "react"

interface IProps {
  checkedRemember?: boolean
  setCheckedRemember?: React.Dispatch<
    React.SetStateAction<boolean>
  >
}
export default function DefaultCheckbox({
  checkedRemember,
  setCheckedRemember,
}: IProps) {
  return (
    <div className="mb-4 flex items-center">
      {checkedRemember && (
        <i
          onClick={() =>
            setCheckedRemember?.(!checkedRemember)
          }
          className="fa-solid fa-square-check text-primaryRed "
        ></i>
      )}
      {!checkedRemember && (
        <i
          onClick={() =>
            setCheckedRemember?.(!checkedRemember)
          }
          className="fa-regular fa-square"
        ></i>
      )}
      <span
        onClick={() =>
          setCheckedRemember?.(!checkedRemember)
        }
        className="ml-2  text-gray-900 dark:text-gray-300"
      >
        Lưu tài khoản
      </span>
    </div>
  )
}

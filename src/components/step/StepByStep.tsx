import React from "react"

interface IPropsStepForm {
  listTitle: string[]
  current: number
}
export default function StepByStep({
  listTitle,
  current,
}: IPropsStepForm) {
  return (
    <div className="flex">
      {listTitle.map((title, index) => {
        return (
          <div
            key={title + index}
            className={`flex ${
              index !== listTitle.length - 1
                ? "flex-1"
                : ""
            }  items-center `}
          >
            <div className="mx-2 flex cursor-pointer items-center whitespace-nowrap text-gray-500">
              <div className="">
                {index < current && <CheckIcon />}
                {index === current && (
                  <div className="mr-2 rounded-[50%] bg-primaryRed px-[7px] py-[1px] text-[12px] text-white">
                    {index + 1}
                  </div>
                )}
                {index > current && (
                  <div className="mr-2 rounded-[50%] border-[1px] border-gray-200 px-[7px] py-[1px] text-[12px]">
                    {index + 1}
                  </div>
                )}
              </div>
              {index < current && (
                <div className="text-black">
                  {title}
                </div>
              )}
              {index === current && (
                <div className="font-medium text-black">
                  {title}
                </div>
              )}
              {index > current && (
                <div className="">{title}</div>
              )}
            </div>
            {index < current ? (
              <div className="h-[1px] w-full bg-primaryRed" />
            ) : (
              <div className="h-[1px] w-full bg-gray-300" />
            )}
          </div>
        )
      })}
    </div>
  )
}

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="mr-2 h-6 w-6 text-primaryRed"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

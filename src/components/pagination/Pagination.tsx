import React from "react"
import { Config } from "../../config"
import ChevronDoubleLeftIcon from "../../icon/chevron/ChevronDoubleLeftIcon"
import ChevronDoubleRightIcon from "../../icon/chevron/ChevronDoubleRightIcon"
import ChevronLeftIcon from "../../icon/chevron/ChevronLeftIcon"
import ChevronRightIcon from "../../icon/chevron/ChevronRightIcon"
interface IProps {
  total: number
  page: number | undefined
  setPage: React.Dispatch<
    React.SetStateAction<number | undefined>
  >
}
export default function Pagination({
  total,
  page = 1,
  setPage,
}: IProps) {
  const pageSize = Config.PAGE_SIZE
  const numberPagination =
    Config.NUMBER_PAGINATION
  const pageCount = Math.ceil(total / pageSize)

  const renderNumberPagination = (
    start: number,
    end: number,
  ) => {
    const arr: number[] = []
    for (let i = start; i <= end; i++) {
      arr.push(i)
    }
    return (
      <div className="flex">
        {arr.map((value) => {
          const isSelect = page === value
          return (
            <div
              key={value}
              className={`cursor-pointer border-[1px] border-l-0 border-gray-300 py-2 px-4 ${
                isSelect
                  ? "bg-primaryRed text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
              onClick={() => setPage(value)}
            >
              {value}
            </div>
          )
        })}
      </div>
    )
  }
  if (pageCount <= Config.NUMBER_PAGINATION + 1) {
    return (
      <div className="flex">
        <div
          className={`flex items-center justify-center border-[1px] border-gray-300 bg-white py-2 px-4 ${
            page === 1
              ? ""
              : "cursor-pointer hover:bg-gray-100"
          }`}
          onClick={() => {
            if (page === 1) return
            setPage(page - 1)
          }}
        >
          <ChevronLeftIcon
            className={`h-4 w-4 ${
              page === 1
                ? "text-gray-500"
                : "text-primaryRed"
            } `}
          />
        </div>
        <div className="flex items-center">
          {renderNumberPagination(1, pageCount)}
        </div>
        <div
          className={`flex items-center justify-center border-[1px] border-l-0 border-gray-300 bg-white py-2 px-4 ${
            page === pageCount
              ? ""
              : "cursor-pointer hover:bg-gray-100"
          }`}
          onClick={() => {
            if (page === pageCount) return
            setPage(page + 1)
          }}
        >
          <ChevronRightIcon
            className={`h-4 w-4 ${
              page === pageCount
                ? "text-gray-500"
                : "text-primaryRed"
            } `}
          />
        </div>
      </div>
    )
  }
  return (
    <div className="flex">
      <div
        className={`flex items-center justify-center rounded-tl-[10px] rounded-bl-[10px] border-[1px] border-gray-300 bg-white py-2 px-4 ${
          page === 1
            ? "text-gray-400"
            : "cursor-pointer text-primaryRed hover:bg-gray-100"
        }`}
        onClick={() => {
          if (page === 1) return
          setPage(1)
        }}
      >
        Trang đầu
      </div>
      <div
        className={`flex items-center justify-center border-[1px] border-l-0 border-gray-300 bg-white py-2 px-4 ${
          page === 1
            ? ""
            : "cursor-pointer hover:bg-gray-100"
        }`}
        onClick={() => {
          if (page === 1) return
          setPage(page - 1)
        }}
      >
        <ChevronDoubleLeftIcon
          className={`h-4 w-4 ${
            page === 1
              ? "text-gray-500"
              : "text-primaryRed"
          } `}
        />
      </div>
      {page - numberPagination <= 0 && (
        <div>
          {renderNumberPagination(1, page)}
        </div>
      )}
      {page - numberPagination > 0 && (
        <div className="flex items-center">
          {page - numberPagination > 1 && (
            <div
              className={`border-[1px] border-l-0 border-gray-300 bg-white py-2 
               px-4
              `}
            >
              ...
            </div>
          )}

          {renderNumberPagination(
            page - numberPagination,
            page,
          )}
        </div>
      )}
      {page + numberPagination >= pageCount && (
        <div>
          {renderNumberPagination(
            page + 1,
            pageCount,
          )}
        </div>
      )}
      {page + numberPagination < pageCount && (
        <div className="flex items-center">
          {renderNumberPagination(
            page + 1,
            page + numberPagination,
          )}
          {page + numberPagination <
            pageCount && (
            <div
              className={`border-[1px] border-l-0 border-gray-300 bg-white py-2 
               px-4
              `}
            >
              ...
            </div>
          )}
        </div>
      )}
      <div
        className={`flex items-center justify-center border-[1px] border-l-0 border-gray-300 bg-white py-2 px-4 ${
          page === pageCount
            ? ""
            : "cursor-pointer hover:bg-gray-100"
        }`}
        onClick={() => {
          if (page === pageCount) return
          setPage(page + 1)
        }}
      >
        <ChevronDoubleRightIcon
          className={`h-4 w-4 ${
            page === pageCount
              ? "text-gray-500"
              : "text-primaryRed"
          } `}
        />
      </div>
      <div
        className={`flex items-center justify-center rounded-tr-[10px] rounded-br-[10px] border-[1px] border-l-0 border-gray-300 bg-white py-2 px-4 ${
          page === pageCount
            ? "text-gray-400"
            : "cursor-pointer text-primaryRed hover:bg-gray-100"
        }`}
        onClick={() => {
          if (page === pageCount) return
          setPage(pageCount)
        }}
      >
        Trang cuối
      </div>
    </div>
  )
}

import React from "react"
import Pagination from "../components/pagination/Pagination"

interface IPropsUsePagination {
  page: number | undefined
  setPage: React.Dispatch<
    React.SetStateAction<number | undefined>
  >
  totalPages: number
}
export default function usePagination({
  page,
  setPage,
  totalPages,
}: IPropsUsePagination) {
  const renderPagination = (
    <Pagination
      page={page}
      setPage={setPage}
      total={totalPages}
    />
  )
}

import React from "react"
import ModalSearch from "../../modal/ModalSearch"

export default function SearchHeader() {
  const [open, setOpen] =
    React.useState<boolean>(false)

  return (
    <div>
      <i
        className="fas fa-search mx-1 cursor-pointer rounded-[50%] bg-gray-100 p-3 text-[16px] font-bold text-primaryRed duration-500 hover:bg-primaryRed hover:text-primaryYellow"
        onClick={() => setOpen(!open)}
      ></i>
      <ModalSearch
        setOpen={setOpen}
        open={open}
      />
    </div>
  )
}

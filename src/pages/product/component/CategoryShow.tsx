import React from "react"
import { PRODUCT_CATEGORIES } from "../../../constant/product.category"
import {
  useMotionValueEvent,
  useScroll,
} from "framer-motion"
import { CategoryType } from "../../../types"
import {
  useLocation,
  useNavigate,
} from "react-router-dom"

interface IPropsCategoryShow {
  categories: CategoryType[]
  categoriesParam: string | undefined
  setCategoriesParam: React.Dispatch<
    React.SetStateAction<string | undefined>
  >
}

export default function CategoryShow({
  categories,
  categoriesParam,
  setCategoriesParam,
}: IPropsCategoryShow) {
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(
    location.search,
  )
  const { scrollY } = useScroll()
  const [isPositionFixed, setIsPositionFixed] =
    React.useState<boolean>(false)

  useMotionValueEvent(
    scrollY,
    "change",
    (latest) => {
      if (latest > 690) {
        setIsPositionFixed(true)
      } else {
        setIsPositionFixed(false)
      }
    },
  )

  const handleSelectCategory = (id: string) => {
    queryParams.set("category", id)
    setCategoriesParam(id)
    navigate({ search: queryParams.toString() })
  }

  return (
    <div
      className={`${
        isPositionFixed
          ? "fixed top-[40px] w-[calc(100%-128px)]"
          : ""
      } z-10 flex translate-y-[-5px] flex-wrap rounded-[10px] bg-white p-4`}
    >
      {categories?.map((categoryItem) => {
        return (
          <div
            key={categoryItem.id}
            className={`mx-2 my-2 cursor-pointer rounded-[30px] ${
              categoriesParam === categoryItem.id
                ? "bg-blue-400"
                : "bg-gray-100"
            } px-8 py-2 font-semibold `}
            onClick={() =>
              handleSelectCategory(
                categoryItem.id,
              )
            }
          >
            {categoryItem.name}
          </div>
        )
      })}
    </div>
  )
}

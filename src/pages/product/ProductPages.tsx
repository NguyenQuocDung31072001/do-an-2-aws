import React from "react"
import CategoryShow from "./component/CategoryShow"
import { ProductMocks } from "../../mocks/product"
import ProductList from "../../components/product/ProductList"
import Pagination from "../../components/pagination/Pagination"
import {
  useMutation,
  useQuery,
} from "react-query"
import { getAllProduct } from "../../services/product"
import {
  CategoryType,
  ProductType,
} from "../../types"
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom"
import usePagination from "../../hook/usePagination"
import { formatProductResponse } from "../../utils/product/formatProductResponses"

export default function ProductPages() {
  const ref = React.useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  //state
  const [categoriesParam, setCategoriesParam] =
    React.useState<string>()
  const [page, setPage] = React.useState<number>()

  const { data } = useQuery({
    queryKey: ["product", page, categoriesParam],
    queryFn: () =>
      getAllProduct({
        page: page,
        categories: categoriesParam,
      }),
    refetchOnWindowFocus: false,
  })

  const categories = data?.data?.categories
  const products = data?.data?.products

  const categoryFormat: CategoryType[] =
    React.useMemo(() => {
      return categories
        ?.filter((categoryItem: any) =>
          Boolean(categoryItem?.name),
        )
        ?.map((categoryItem: any) => ({
          id: categoryItem._id,
          name: categoryItem.name,
        }))
    }, [categories])

  const productFormats: ProductType[] =
    React.useMemo(() => {
      return products?.map((product: any) => {
        return formatProductResponse(product)
      })
    }, [products])

  const queryParams = new URLSearchParams(
    location.search,
  )
  const handleSetPage = () => {
    const pageParam = page?.toString() || ""
    queryParams.set("page", pageParam)
    navigate({ search: queryParams.toString() })
  }
  React.useEffect(() => {
    if (!page) return
    handleSetPage()
  }, [page])

  React.useEffect(() => {
    window.scrollTo(0, 0)
    if (location.search.includes("category")) {
      const categoryParam = location.search
        .split("&")
        .find((query) =>
          query.includes("category"),
        )
        ?.split("=")[1]

      setCategoriesParam(categoryParam)
    }
    if (location.search.includes("page")) {
      const pageParam = Number(
        location.search
          .split("&&")
          .find((query) => query.includes("page"))
          ?.split("=")[1],
      )
      setPage(pageParam)
    }
  }, [])

  return (
    <div>
      <div className="z-10 flex w-full">
        <div className="z-10 h-[600px] w-[50%] bg-primaryRed bg-pattern bg-cover bg-center px-16 py-36">
          <p className="font-serif text-[48px] font-bold text-primaryYellow">
            Yến Sào Thất Sơn
          </p>
          <div className="h-[8px] w-[200px] bg-primaryYellow"></div>
          <p className="py-8 text-white/50 ">
            Yến Sào Sạch & Chất Lượng Cao
          </p>
          <div
            className="flex w-[250px] cursor-pointer items-center justify-center rounded-[50px] bg-primaryYellow p-4 font-bold text-primaryRed duration-200 hover:bg-white/90 hover:text-primaryYellow"
            onClick={() =>
              ref?.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            XEM SẢN PHẨM
          </div>
        </div>
        <div className="z-10 h-[600px] w-[50%] bg-product-hero bg-cover bg-center"></div>
      </div>
      <div
        ref={ref}
        className="z-0 bg-gray-100 px-16"
      >
        <div className="h-[200px] w-full">
          <CategoryShow
            categories={categoryFormat}
            categoriesParam={categoriesParam}
            setCategoriesParam={
              setCategoriesParam
            }
          />
        </div>
        <div className="flex flex-wrap justify-between">
          {productFormats?.map((product) => (
            <ProductList
              key={product.id}
              product={product}
            />
          ))}
        </div>
        <div className="flex w-full justify-center py-8">
          <Pagination
            page={page}
            setPage={setPage}
            total={data?.data?.totalPages}
          />
        </div>
      </div>
    </div>
  )
}

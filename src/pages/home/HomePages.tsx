import React from "react"

//component
import { useNavigate } from "react-router-dom"
import { ProductMocks } from "../../mocks/product"
import ProductList from "../../components/product/ProductList"
import { PathRouter } from "../../constant/path.router"
import { useQuery } from "react-query"
import { getAllProduct } from "../../services/product"
import { ProductType } from "../../types"
import { formatProductResponse } from "../../utils/product/formatProductResponses"

export default function HomePages() {
  const productRef =
    React.useRef<HTMLDivElement>(null)

  const navigate = useNavigate()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { data } = useQuery({
    queryKey: ["product_dashboard"],
    queryFn: () => getAllProduct(),
    refetchOnWindowFocus: false,
  })

  const products = data?.data?.products
  const productFormats: ProductType[] =
    React.useMemo(() => {
      return products?.map((product: any) => {
        return formatProductResponse(product)
      })
    }, [products])

  return (
    <div className="flex flex-col items-center bg-gray-100/50">
      <div className="mb-8 flex w-full flex-col items-center">
        <div className="flex h-[600px] w-[100%] flex-col items-center justify-center bg-hero bg-cover">
          <p className="font-serif text-[64px] font-bold text-primaryRed">
            Nâng Tầm Sức Khỏe
          </p>
          <p className="font-serif text-[30px] font-bold text-primaryYellow">
            Yến Sào Sạch & Chất Lượng Cao
          </p>
        </div>
        <div className="flex w-full flex-wrap">
          <div className="h-[700px] w-[50%] bg-red-900 bg-pattern bg-cover bg-center p-16">
            <p className="py-8 font-serif text-[48px] font-bold text-primaryYellow">
              Những Chén Yến Giúp Gia Đình Bạn
              Khỏe Mạnh Hơn
            </p>
            <p className="text-[18px] text-white/50">
              Đây là những tổ yến chứa 18 loại
              acid amin mà cơ thể không tự tổng
              hợp được, cùng rất nhiều
              cacbonhydrat, muối khoáng, khoáng
              chất vi lượng…. giúp cơ thể khỏe
              mạnh, trẻ hóa tế bào, da trắng mịn,
              hồng hào và cải thiện trí nhớ.
            </p>
            <div
              className="my-8 flex w-[200px] cursor-pointer items-center justify-center rounded-[50px] bg-primaryYellow p-4 font-bold text-primaryRed duration-200 hover:bg-white/90 hover:text-primaryYellow"
              onClick={() =>
                productRef?.current?.scrollIntoView(
                  {
                    behavior: "smooth",
                  },
                )
              }
            >
              XEM SẢN PHẨM
            </div>
          </div>
          <div className="h-[700px] w-[50%] bg-intro1 bg-cover bg-center"></div>
          <div className="h-[700px] w-[50%] bg-intro2 bg-cover  bg-center"></div>
          <div className="h-[700px] w-[50%] bg-primaryYellow bg-pattern bg-cover bg-center p-16">
            <p className="py-8 font-serif text-[48px] font-bold text-primaryRed">
              Quy Trình Xử Lí Sạch & Vệ Sinh
            </p>
            <p className="text-[18px] text-black/50">
              Tổ yến thô được rã tổ và làm sạch
              phân – lông chim. Giai đoạn này được
              thực hiện thủ công. Đầu tiên, ngâm
              tổ yến thô vào nước sạch, tùy vào
              mức độ nở của tổ yến thô mà ngâm lâu
              hay nhanh. Sau đó tiến hành làm ráo
              nước và cho vào 1 đĩa (màu trắng).
              Tiếp theo, tiến hành nhặt lần đầu
              những lông lớn và những tạp chất
              (đất, vôi,…) và một số lông kim
              (lông nhỏ khó nhặt).
            </p>
            <div
              className="my-8 flex w-[200px] cursor-pointer items-center justify-center rounded-[50px] bg-primaryRed p-4 font-bold text-primaryYellow duration-300 hover:bg-white/90 hover:text-primaryRed"
              onClick={() =>
                productRef?.current?.scrollIntoView(
                  {
                    behavior: "smooth",
                  },
                )
              }
            >
              XEM SẢN PHẨM
            </div>
          </div>
          <div
            ref={productRef}
            className="w-full bg-primaryRed p-8"
          >
            <div className="flex w-full flex-col items-center justify-center">
              <p className="z-10 font-serif text-[32px] font-bold text-primaryYellow">
                Yến Sào Sạch & Chất Lượng Cao
              </p>
              <div className="z-0 h-[20px] w-full translate-y-[-20px] bg-red-800/50"></div>
            </div>
            <div className="flex flex-wrap justify-between">
              {productFormats?.map(
                (product, index) => (
                  <ProductList
                    key={index}
                    product={product}
                  />
                ),
              )}
            </div>
            <div
              className="my-8 flex w-full cursor-pointer items-center justify-center rounded-[20px] bg-primaryYellow p-4 font-bold text-primaryRed duration-200 hover:bg-white/90 hover:text-primaryYellow"
              onClick={() =>
                navigate(PathRouter.PRODUCT)
              }
            >
              XEM SẢN PHẨM
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

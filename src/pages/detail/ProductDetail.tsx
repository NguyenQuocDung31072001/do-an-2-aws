import ProductInfo from "./component/ProductInfo"
import DetailInfomation from "./component/DetailInfomation"
import CommentAndRating from "./component/CommentAndRating"
import React from "react"
import ProductList from "../../components/product/ProductList"
import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { getProductById } from "../../services/product"
import { formatProductResponse } from "../../utils/product/formatProductResponses"
import { ProductType } from "../../types"

export default function ProductDetail() {
  const { id } = useParams()

  const { data, refetch: getProductDetail } =
    useQuery({
      queryKey: ["product_detail"],
      queryFn: () => getProductById(id || ""),
      enabled: false,
    })
  const productFormat = formatProductResponse(
    data?.data?.product,
  )
  const productRelatedFormat: ProductType[] =
    data?.data?.relatedProducts?.map(
      (_product: any) => {
        return formatProductResponse(_product)
      },
    )
  React.useEffect(() => {
    window.scrollTo(0, 0)
    getProductDetail()
  }, [id])

  return (
    <div className="bg-primaryRed px-16 py-8">
      <ProductInfo product={productFormat} />
      <DetailInfomation />
      <CommentAndRating />
      <div className="my-8">
        <p className="font-serif text-[24px] font-bold text-primaryYellow">
          Sản phẩm liên quan
        </p>
        <div className="h-2 w-[50%] bg-primaryYellow" />
      </div>
      <div className="flex flex-wrap justify-between">
        {productRelatedFormat?.map((product) => (
          <ProductList
            key={product.id}
            product={product}
          />
        ))}
      </div>
      {/* <div className="flex w-full justify-center py-8">
        <Pagination total={8} />
      </div> */}
    </div>
  )
}

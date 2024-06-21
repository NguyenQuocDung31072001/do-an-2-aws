import { ProductType } from "../../../types"
import ProductDetailInfo from "./ProductDetailInfo"

export interface IPropsProductInfo {
  product: ProductType
}
export default function ProductInfo({
  product,
}: IPropsProductInfo) {
  return (
    <div className="min-w-[1000px grid  grid-cols-2">
      <div className="col-span-1 flex min-w-[500px] items-center overflow-hidden">
        <img
          src={product.featuredImage}
          alt=""
          className="cursor-pointer object-cover duration-200 hover:scale-110"
        />
      </div>
      <div className="col-span-1 h-[460px] min-w-[500px] bg-white p-8">
        <ProductDetailInfo product={product} />
      </div>
    </div>
  )
}

import React from "react"
import ProductRating from "../../../components/ProductRating"
import { convertToVNPrice } from "../../../utils/string"
import QuantityProductManegement from "../../../components/quantity/QuantityProductManegement"
import CartIconFilled from "../../../icon/CartIconFilled"
import { IPropsProductInfo } from "./ProductInfo"
import { useMutation } from "react-query"
import { addToCart } from "../../../services/cart"
import {
  ToastContainer,
  toast,
} from "react-toastify"

export default function ProductDetailInfo({
  product,
}: IPropsProductInfo) {
  const [quantityChoosed, setQuantityChoosed] =
    React.useState<number>(1)

  const { mutateAsync: addToCartMutation } =
    useMutation({
      mutationKey: ["add_to_cart"],
      mutationFn: addToCart,
    })
  const handleAddToCart = () => {
    if (quantityChoosed < 1) {
      toast.error(
        "Vui lòng chọn số lượng sản phẩm!",
        {
          pauseOnHover: false,
        },
      )
      return
    }
    addToCartMutation({
      productId: product.id,
      quantity: quantityChoosed.toString(),
    })
      .then((res) => {
        toast.success(
          `${product.name} đã được thêm vào giỏ hàng!`,
          {
            pauseOnHover: false,
          },
        )
      })
      .catch((e) => {
        toast.error(
          `Có lỗi xảy ra khi thêm ${product.name} vào giỏ hàng`,
          {
            pauseOnHover: false,
          },
        )
      })
  }
  return (
    <div>
      <ToastContainer />
      <p className="font-serif text-[36px] font-bold">
        {product.name}
      </p>
      <div className="flex p-2">
        <ProductRating
          rating={product.averageRate}
          activeClassname="'h-5 w-5 fill-yellow-300 text-yellow-300"
          nonActiveClassname="h-5 w-5 fill-current text-gray-100"
        />
        {product.quantityRating === 0 ? (
          <p className="pl-2 text-[18px] text-gray-300">
            Chưa có đánh giá
          </p>
        ) : (
          <div className="flex pl-2">
            <p className="pr-2">
              {product.averageRate}
            </p>
            <p className="text-gray-300">{`(${product.quantityRating} đánh giá)`}</p>
          </div>
        )}
      </div>
      <div className="flex px-2">
        <p className="text-[24px] font-bold text-primaryRed">
          {convertToVNPrice(
            product.price - product.discount,
          )}
        </p>
        <p className="pl-4 text-[24px] text-gray-500">{`-${(
          (product.discount / product.price) *
          100
        ).toFixed(2)}%`}</p>
      </div>
      <p className="px-2 text-[18px] text-gray-400 line-through">
        {convertToVNPrice(product.price)}
      </p>
      <p className="mb-4 px-2 text-[16px] text-black line-clamp-3">
        {product.description}
      </p>
      <QuantityProductManegement
        quantityChoosed={quantityChoosed}
        setQuantityChoosed={setQuantityChoosed}
      />
      <div
        className="my-8 flex w-full cursor-pointer items-center justify-center rounded-[50px] bg-primaryRed py-2 font-bold text-primaryYellow duration-300 hover:bg-primaryYellow hover:text-primaryRed"
        onClick={handleAddToCart}
      >
        <CartIconFilled className="mr-2 h-6 w-6" />
        THÊM VÀO GIỎ HÀNG
      </div>
    </div>
  )
}

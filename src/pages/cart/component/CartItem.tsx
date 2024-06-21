import React from "react"
import { convertToVNPrice } from "../../../utils/string"
import MinusIcon from "../../../icon/MinusIcon"
import PlusIcon from "../../../icon/PlusIcon"
import { useNavigate } from "react-router"
import { PathRouter } from "../../../constant/path.router"

export interface IPropsCartItem {
  featuredImage: string
  id: string
  name: string
  price: string
  productId: string
  quantity: number
  _discount: number
  _maxQuantity: number
  _price: number
}
interface IProps {
  item: IPropsCartItem
  handleDecreaseItem: (
    item: IPropsCartItem,
  ) => void
  handleIncreaseItem: (
    item: IPropsCartItem,
  ) => void
  handleDeteleItem: (item: IPropsCartItem) => void
}
export default function CartItem({
  item,
  handleIncreaseItem,
  handleDecreaseItem,
  handleDeteleItem,
}: IProps) {
  const navigate = useNavigate()

  return (
    <div className="my-4 grid h-[200px] w-full grid-cols-12 overflow-hidden rounded-[10px] bg-white shadow-lg">
      <div className="col-span-3">
        <img
          src={`http://localhost:3001/${item.featuredImage}`}
          alt=""
          className="h-[200px] w-[300px] object-cover"
        />
      </div>
      <div className="col-span-7 flex flex-col justify-between py-12">
        <p
          className="cursor-pointer text-[20px] font-bold hover:text-[21px]"
          onClick={() => {
            navigate(
              `${PathRouter.DETAIL}/${item.productId}`,
            )
          }}
        >
          {item.name}
        </p>
        <p className="font-bold text-primaryRed">
          {convertToVNPrice(
            item._price - item._discount,
          )}
        </p>
        <p
          className=" w-32 cursor-pointer text-gray-500  hover:text-black"
          onClick={() => handleDeteleItem(item)}
        >
          Xoá sản phẩm
        </p>
      </div>
      <div className="col-span-2 flex items-center">
        <MinusIcon
          className="h-7 w-7 cursor-pointer rounded-[50%] bg-gray-200 px-1"
          onClick={() => handleDecreaseItem(item)}
        />
        <p className="mx-6">{item.quantity}</p>
        <PlusIcon
          className="h-7 w-7 cursor-pointer rounded-[50%] bg-gray-200 px-1"
          onClick={() => handleIncreaseItem(item)}
        />
      </div>
    </div>
  )
}

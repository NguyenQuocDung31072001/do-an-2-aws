import React from "react"
import { convertToVNPrice } from "../../utils/string"
import CartItem, {
  IPropsCartItem,
} from "./component/CartItem"
import { useNavigate } from "react-router-dom"
import { PathRouter } from "../../constant/path.router"
import {
  useMutation,
  useQuery,
} from "react-query"
import {
  addToCart,
  deleteAllCart,
  getCart,
} from "../../services/cart"
import {
  ToastContainer,
  toast,
} from "react-toastify"
import { useOrderContext } from "../../context/OrderContext"

export default function CartPages() {
  const { setProducts } = useOrderContext()

  const [cartData, setCartData] = React.useState<
    IPropsCartItem[]
  >([])
  const navigate = useNavigate()
  const { data, refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    enabled: false,
  })
  const { mutateAsync: changeCartItem } =
    useMutation({
      mutationKey: ["change_cart"],
      mutationFn: addToCart,
    })

  const { mutateAsync: deleteAllCartMutation } =
    useMutation({
      mutationKey: ["delete_all_cart"],
      mutationFn: deleteAllCart,
    })

  const handleDecreaseItem = (
    item: IPropsCartItem,
  ) => {
    const quantity = item.quantity - 1
    changeCartItem({
      productId: item.productId,
      quantity: quantity.toString(),
    }).then(() => {
      refetch()
    })
  }
  const handleIncreaseItem = (
    item: IPropsCartItem,
  ) => {
    changeCartItem({
      productId: item.productId,
      quantity: (item.quantity + 1).toString(),
    }).then(() => {
      refetch()
    })
  }
  const handleDeteleItem = (
    item: IPropsCartItem,
  ) => {
    changeCartItem({
      productId: item.productId,
      quantity: "0",
    }).then(() => {
      toast.success(
        `${item.name} đã được xóa khỏi giỏ hàng!`,
        {
          pauseOnHover: false,
        },
      )
      refetch()
    })
  }
  const handleDeleteAllCart = () => {
    deleteAllCartMutation().then(() => {
      toast.success(`Đã xóa giỏ hàng!`, {
        pauseOnHover: false,
      })
      refetch()
    })
  }
  React.useEffect(() => {
    refetch()
  }, [])

  React.useLayoutEffect(() => {
    if (!data?.data) return
    setCartData(data.data?.cart)
  }, [data])
  const totalPrice = cartData.reduce(
    (acc, currItem) => {
      const priceItem =
        (currItem._price - currItem._discount) *
        currItem.quantity
      acc += priceItem
      return acc
    },
    0,
  )
  return (
    <div className="px-16 pt-10">
      <ToastContainer />
      <div className="flex w-full justify-between text-primaryRed">
        <p className="font-serif text-[24px] font-semibold">
          Giỏ hàng
        </p>
        <p
          className="cursor-pointer"
          onClick={handleDeleteAllCart}
        >
          Xoá tất cả
        </p>
      </div>
      <div className="mb-8 mt-2 h-1 w-full bg-gray-200" />
      {cartData.length === 0 ? (
        <div className="w-full rounded-[10px] bg-[#fff3cd] p-4 text-[#664d03]">
          Không có sản phẩm nào trong giỏ hàng của
          bạn.
        </div>
      ) : (
        cartData.map(
          (cartItem: IPropsCartItem) => (
            <CartItem
              key={cartItem.id}
              item={cartItem}
              handleIncreaseItem={
                handleIncreaseItem
              }
              handleDecreaseItem={
                handleDecreaseItem
              }
              handleDeteleItem={handleDeteleItem}
            />
          ),
        )
      )}
      <div className="h-[100px] w-full" />
      <div className="fixed bottom-0 flex w-[90%] justify-between bg-white p-4 shadow-xl">
        <span className="font-semibold text-primaryRed">
          Thành tiền :
          <span className="ml-4 text-[24px] font-bold ">
            {convertToVNPrice(totalPrice)}
          </span>
        </span>
        <span className="text-gray-500">
          Đã bao gồm VAT nếu có
        </span>
        <button
          className="rounded-[20px] bg-primaryRed px-8 py-2 font-bold text-primaryYellow duration-150 hover:bg-primaryYellow hover:text-primaryRed"
          onClick={() => {
            navigate(PathRouter.SHIPPING)
            setProducts(cartData)
          }}
        >
          THANH TOÁN
        </button>
      </div>
    </div>
  )
}

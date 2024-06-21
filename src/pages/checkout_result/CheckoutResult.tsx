import React from "react"
import useStepForm from "../../hook/useStepForm"
import { useNavigate } from "react-router-dom"
import { PathRouter } from "../../constant/path.router"
import { useOrderContext } from "../../context/OrderContext"
import { useMutation } from "react-query"
import { createOrder } from "../../services/order"
import {
  ToastContainer,
  toast,
} from "react-toastify"

const listTitleData = [
  "Chọn sản phẩm",
  "Thông tin giao hàng",
  "Thanh toán",
]

export default function CheckoutResult() {
  const {
    fullName,
    phoneNumber,
    shipingAddress,
    products,
    paymentMethod,
  } = useOrderContext()

  const { mutateAsync: createOrderMutation } =
    useMutation({
      mutationKey: ["create_order"],
      mutationFn: createOrder,
    })

  const {
    gotoStep,
    renderStepForm,
    listTitle,
    setListTitle,
  } = useStepForm()

  const navigate = useNavigate()

  React.useEffect(() => {
    setListTitle(listTitleData)
    handleOrder()
  }, [])

  React.useEffect(() => {
    gotoStep(3)
  }, [listTitle])

  const handleOrder = () => {
    createOrderMutation({
      fullName: fullName,
      shippingAddress: shipingAddress,
      phoneNumber: phoneNumber,
      paymentMethod: paymentMethod,
      products: products.map((product) => ({
        productId: product.productId,
        quantity: product.quantity.toString(),
      })),
    }).then(() => {
      toast.success(
        "Bạn đã đặt hàng thành công!",
        {
          pauseOnHover: false,
        },
      )
    })
  }
  return (
    <div className="h-[100vh] bg-white">
      <ToastContainer />
      <div className="px-32">
        {renderStepForm}
      </div>
      <div className="my-8 h-[1px] w-full bg-gray-200" />
      <div className="px-64">
        <div className="flex flex-col items-center rounded-lg border-[1px] border-gray-100 px-8 py-4 shadow-lg">
          <i className="far fa-check-circle my-8 text-[64px] text-primaryRed"></i>

          <p className="mb-4 text-[24px] font-medium">
            Đặt hàng thành công
          </p>
          <p className="text-gray-500">
            Đơn hàng của quý khách sẽ được xử lí
            trong 1 - 3 ngày.
          </p>
          <p className="text-gray-500">
            Vui lòng đợi chúng tôi liên hệ xác
            nhận đơn hàng.
          </p>
          <button
            className="my-4 flex justify-center rounded-[20px] bg-primaryRed py-2 px-8 font-bold text-primaryYellow duration-300 hover:bg-primaryYellow hover:text-primaryRed"
            onClick={() =>
              navigate(
                PathRouter.PROFILE_PURCHASES,
              )
            }
          >
            Xem đơn hàng
          </button>
        </div>
      </div>
    </div>
  )
}

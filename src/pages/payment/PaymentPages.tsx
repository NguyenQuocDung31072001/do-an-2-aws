import React from "react"
import useStepForm from "../../hook/useStepForm"
import { convertToVNPrice } from "../../utils/string"
import { useNavigate } from "react-router-dom"
import { PathRouter } from "../../constant/path.router"
import { useOrderContext } from "../../context/OrderContext"

const listTitleData = [
  "Chọn sản phẩm",
  "Thông tin giao hàng",
  "Thanh toán",
]

export default function PaymentPages() {
  const {
    products,
    email,
    fullName,
    phoneNumber,
    shipingAddress,
  } = useOrderContext()

  const {
    gotoStep,
    renderStepForm,
    listTitle,
    setListTitle,
  } = useStepForm()

  const navigate = useNavigate()

  React.useEffect(() => {
    setListTitle(listTitleData)
  }, [])

  React.useEffect(() => {
    gotoStep(2)
  }, [listTitle])

  const totalPrice = products.reduce(
    (acc, currItem) => {
      const price =
        (currItem._price - currItem._discount) *
        currItem.quantity
      acc += price
      return acc
    },
    0,
  )
  return (
    <div className="h-[100vh] bg-white">
      <div className="px-32">
        {renderStepForm}
      </div>
      <div className="my-8 h-[1px] w-full bg-gray-200" />
      <div className=" px-64">
        <div className="rounded-[10px] border-[1px] border-gray-100 py-2 shadow-lg">
          <p className="px-4 font-serif font-bold">
            Phương thức thanh toán
          </p>
          <div className="my-4 h-[1px] w-full bg-gray-200 " />
          <div className="px-4 pb-4">
            <select
              id="countries"
              className="focus:border-primaryRed/ focus:ring-50 primaryRed/50 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primaryRed/80 focus:outline-none focus:ring-2 focus:ring-primaryRed/50"
            >
              <option selected>
                Thanh toán khi nhận hàng
              </option>
              <option value="online">
                Chuyển khoản ngân hàng
              </option>
            </select>
          </div>
        </div>
        <div className="my-2 h-1 w-full" />
        <div className="rounded-[10px] border-[1px] border-gray-100 py-2 shadow-lg">
          <div className="flex items-center justify-between px-4">
            <p className="font-serif font-bold">
              Thông tin giao hàng
            </p>
            <p
              className="cursor-pointer text-primaryRed"
              onClick={() =>
                navigate(PathRouter.SHIPPING)
              }
            >
              Chỉnh sửa
            </p>
          </div>
          <div className="my-4 h-[1px] w-full bg-gray-200 " />
          <div className="px-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-medium">
                Họ tên
              </p>
              <p>{fullName}</p>
            </div>
            <div className="mb-2 flex items-center justify-between">
              <p className="font-medium">
                Điện thoại
              </p>
              <p>{phoneNumber}</p>
            </div>
            <div className="mb-2 flex items-center justify-between">
              <p className="font-medium">Email</p>
              <p>{email}</p>
            </div>
            <div className="mb-2 flex items-center justify-between">
              <p className="font-medium">
                Địa chỉ nhận hàng
              </p>
              <p>{shipingAddress}</p>
            </div>
          </div>
        </div>
        <div className="my-2 h-1 w-full" />
        <div className="rounded-[10px] border-[1px] border-gray-100 py-2 shadow-lg">
          <div className="flex items-center justify-between px-4">
            <p className="font-serif font-bold">
              Sản phẩm
            </p>
            <p
              className="cursor-pointer text-primaryRed"
              onClick={() =>
                navigate(PathRouter.CART)
              }
            >
              Chỉnh sửa
            </p>
          </div>
          <div className="my-4 h-[1px] w-full bg-gray-200 " />
          <div className="px-4">
            {products.map((productItem) => (
              <div
                key={productItem.id}
                className="flex items-center justify-between"
              >
                <span>
                  {productItem.quantity} x
                  <span>{productItem.name}</span>
                </span>
                <span className="font-medium text-primaryRed">
                  {convertToVNPrice(
                    (productItem._price -
                      productItem._discount) *
                      productItem.quantity,
                  )}
                </span>
              </div>
            ))}

            <div className="my-2 h-1 w-full bg-gray-200"></div>
            <div className="flex items-center justify-between">
              <p className=" font-semibold">
                Thành tiền
              </p>
              <div>
                <p className="text-[18px] font-bold text-primaryRed">
                  {convertToVNPrice(totalPrice)}
                </p>
                <p className="text-gray-600">
                  Đã bao gồm VAT nếu có
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 h-1 w-full" />
        <button
          className="flex w-full justify-center rounded-[10px] bg-primaryRed py-2 font-bold text-primaryYellow duration-150 hover:bg-primaryYellow hover:text-primaryRed"
          onClick={() =>
            navigate(PathRouter.CHECKOUT_RESULT)
          }
        >
          ĐẶT HÀNG
        </button>
      </div>
    </div>
  )
}

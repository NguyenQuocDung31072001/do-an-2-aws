import React from "react"
import useStepForm from "../../hook/useStepForm"
import InputNormal from "../../components/input/InputNomal"
import { useNavigate } from "react-router-dom"
import { PathRouter } from "../../constant/path.router"
import { useQuery } from "react-query"
import { getProfile } from "../../services/profile"
import { useOrderContext } from "../../context/OrderContext"

const listTitleData = [
  "Chọn sản phẩm",
  "Thông tin giao hàng",
  "Thanh toán",
]
export default function ShippingPages() {
  const {
    fullName,
    setFullName,
    phoneNumber,
    setPhoneNumber,
    shipingAddress,
    setShippingAddress,
    email,
    setEmail,
  } = useOrderContext()
  //state

  const navigate = useNavigate()

  const { data, refetch: getProfileQuery } =
    useQuery({
      queryKey: ["info"],
      queryFn: getProfile,
      enabled: false,
    })

  const {
    gotoStep,
    renderStepForm,
    listTitle,
    setListTitle,
  } = useStepForm()

  React.useEffect(() => {
    setListTitle(listTitleData)
    getProfileQuery()
  }, [])

  React.useEffect(() => {
    gotoStep(1)
  }, [listTitle])

  React.useEffect(() => {
    if (!data?.data) return
    setEmail(data.data.email)
    setFullName(data.data.fullName)
    setShippingAddress(data.data.address)
    setPhoneNumber(data.data.phoneNumber)
  }, [data])

  return (
    <div className="h-[100vh] bg-white">
      <div className="px-32">
        {renderStepForm}
      </div>
      <div className="my-8 h-[1px] w-full bg-gray-200" />
      <div className="px-32">
        <div className="flex flex-col justify-center rounded-[10px] border-[1px] border-gray-100 shadow-lg">
          <div className="py-4 px-8 ">
            <p className="font-serif text-[18px] font-bold">
              Thông tin giao hàng
            </p>
          </div>
          <div className="h-[1px] w-full bg-gray-200" />
          <div className="px-4 py-2">
            <div className="px-4 py-2">
              <p className="mb-2">Họ tên</p>
              <InputNormal
                type="text"
                placeholder="Họ và tên"
                value={fullName}
                setValue={setFullName}
                borderColor="gray-500"
              />
            </div>
            <div className="px-4 py-2">
              <p className="mb-2">Điện thoại</p>
              <InputNormal
                type="text"
                placeholder="Điện thoại"
                value={phoneNumber}
                setValue={setPhoneNumber}
                borderColor="gray-500"
              />
              <p className="my-2 text-[14px] text-gray-500">
                Chúng tôi sẽ liên hệ với quý khách
                để xác nhận đơn hàng.
              </p>
            </div>
            <div className="px-4 py-2">
              <p className="mb-2">
                Địa chỉ nhận hàng
              </p>
              <InputNormal
                type="text"
                placeholder="Địa chỉ nhận hàng"
                value={shipingAddress}
                setValue={setShippingAddress}
                borderColor="gray-500"
              />
              <p className="my-2 text-[14px] text-gray-500">
                Hãy nhập địa chỉ chi tiết để
                Shipper dễ dàng giao hàng cho bạn.
              </p>
            </div>
            <div className="px-4 py-2 ">
              <p className="mb-2">Email</p>
              <InputNormal
                type="text"
                placeholder="Email"
                value={email}
                setValue={setEmail}
                borderColor="gray-500"
                disable
              />
              <p className="my-2 text-[14px] text-gray-500">
                Chúng tôi sẽ gửi thông báo về đơn
                hàng qua Email này.
              </p>
            </div>
          </div>
          <button
            className="mx-8 mb-8 rounded-[10px] bg-primaryRed/90 py-2 text-white duration-200 hover:bg-primaryRed"
            onClick={() =>
              navigate(PathRouter.PAYMENT)
            }
          >
            Giao đến địa chỉ này
          </button>
        </div>
      </div>
    </div>
  )
}

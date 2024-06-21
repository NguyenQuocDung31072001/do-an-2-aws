import React from "react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getProductReview } from "../../../services/product"

export default function DetailInfomation() {
  const { id } = useParams()
  const { data } = useQuery({
    queryKey: ["product preview"],
    queryFn: () => getProductReview(id || ""),
  })

  return (
    <div className="mt-8 rounded-[10px] bg-white p-8">
      <p className="mb-2 font-serif text-[24px] font-bold text-primaryRed">
        Thông tin chi tiết
      </p>
      <div className="h-2 w-[50%] bg-primaryRed" />
      <div className="my-4">
        <p className="mb-2">Thành phần</p>
        <p>100% Yến sào (trắng)</p>
      </div>
      <div className="h-[1px] w-full bg-gray-200" />
      <div className="my-4">
        <p className="mb-2">Khối lượng</p>
        <p>70g</p>
      </div>
      <div className="h-[1px] w-full bg-gray-200" />
      <div className="my-4">
        <p className="mb-2">Công dụng</p>
        <p>
          Tổ yến chứa tới 18 loại acid amin mà cơ
          thể không tự tổng hợp được, cùng rất
          nhiều cacbonhydrat, muối khoáng, khoáng
          chất vi lượng.... giúp cơ thể khỏe mạnh,
          trẻ hóa tế bào, da trắng mịn, hồng hào
          và cải thiện trí nhớ.
        </p>
      </div>
      <div className="h-[1px] w-full bg-gray-200" />
      <div className="my-4">
        <p className="mb-2">Bảo quản</p>
        <p>
          Trong hộp kín, nơi khô ráo, tránh ánh
          nắng trực tiếp
        </p>
      </div>
      <div className="h-[1px] w-full bg-gray-200" />
      <div className="my-4">
        <p className="mb-2">Hạn sử dụng</p>
        <p>02 năm kể từ ngày sản xuất</p>
      </div>
      <div className="h-[1px] w-full bg-gray-200" />
      <div className="my-4">
        <p className="mb-2">Xuất xứ</p>
        <p>Việt Nam</p>
      </div>
      <div className="h-[1px] w-full bg-gray-200" />
      <div className="my-4">
        <p className="mb-2">
          Sản phẩm của Công Ty TNHH MTV Yến Sào
          DamiNest
        </p>
        <p>
          Địa chỉ : KTX Khu B - ĐHQG HCM, Linh
          Trung, Thủ Đức, HCM
        </p>
        <p>Hotline : 0945 094 870</p>
      </div>
      <div className="h-[1px] w-full bg-gray-200" />
      <div className="mt-8 flex items-center justify-between">
        <div className="mx-2 flex w-full flex-col items-center justify-center rounded-[10px] bg-gray-100/60 py-4">
          <i className="fas fa-shipping-fast  flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-primaryYellow text-[20px] text-primaryRed"></i>
          <p className="mt-4">
            Miễn phí giao hàng
          </p>
        </div>
        <div className="mx-2 flex w-full flex-col items-center justify-center rounded-[10px] bg-gray-100/60 py-4">
          <i className="fas fa-shipping-fast  flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-primaryYellow text-[20px] text-primaryRed"></i>
          <p className="mt-4">
            Miễn phí giao hàng
          </p>
        </div>
        <div className="mx-2 flex w-full flex-col items-center justify-center rounded-[10px] bg-gray-100/60 py-4">
          <i className="fas fa-shipping-fast  flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-primaryYellow text-[20px] text-primaryRed"></i>
          <p className="mt-4">
            Miễn phí giao hàng
          </p>
        </div>
      </div>
    </div>
  )
}

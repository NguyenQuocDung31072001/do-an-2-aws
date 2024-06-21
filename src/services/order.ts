import { axiosInstance } from "../config/axiosInstance"

export const createOrder = async (data: {
  fullName: string
  phoneNumber: string
  shippingAddress: string
  products: {
    productId: string
    quantity: string
  }[]
  paymentMethod: string
}) => {
  const res = await axiosInstance.post(
    "/checkout/create-order",
    data,
  )
  return res
}

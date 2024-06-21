import { axiosInstance } from "../config/axiosInstance"

export const getShippingInfo = async () => {
  const res = await axiosInstance.get(
    "/checkout/shipping",
  )
  return res
}

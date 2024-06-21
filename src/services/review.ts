import { axiosInstance } from "../config/axiosInstance"

export const postProductPreview = async (data: {
  productId: string
  rating: number
  content: string
}) => {
  const res = await axiosInstance.post(
    "product-review",
    data,
  )
  return res
}

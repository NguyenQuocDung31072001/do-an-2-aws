import { axiosInstance } from "../config/axiosInstance"

export const getCart = async () => {
  const res = await axiosInstance.get(
    "/checkout/cart/get",
  )
  return res
}

export const addToCart = async (data: {
  productId: string
  quantity: string
}) => {
  const res = await axiosInstance.put(
    "/checkout/cart/add",
    {
      productId: data.productId,
      quantity: data.quantity,
    },
  )
  return res
}
export const deleteAllCart = async () => {
  const res = await axiosInstance.delete(
    "/checkout/cart/delete-all",
  )
  return res
}

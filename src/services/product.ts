import { axiosInstance } from "../config/axiosInstance"

export const getAllProduct = async (query?: {
  page?: number
  categories?: string
}) => {
  let url = "products"
  if (query?.page) {
    url = `products?page=${query.page}`
  }
  if (query?.categories) {
    url = `products?categoryId=${query.categories}`
  }
  const res = await axiosInstance.get(url)
  return res
}

export const getProductById = async (
  id: string,
) => {
  const res = await axiosInstance.get(
    `products/${id}`,
  )
  return res
}

export const getProductReview = async (
  id: string,
) => {
  const res = await axiosInstance.get(
    `products/${id}/reviews`,
  )
  return res
}

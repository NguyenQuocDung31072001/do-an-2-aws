import { ProductType } from "../../types"

export const formatProductResponse = (
  productResponse: any,
): ProductType => {
  return {
    id: productResponse?._id,
    name: productResponse?.name,
    featuredImage:
      "http://localhost:3001/" +
      productResponse?.featuredImage,
    averageRate: productResponse?.ratingAvg,
    quantityRating: productResponse?.totalRatings,
    price: productResponse?.price,
    discount: productResponse?.discount,
    description: productResponse?.description,
    uses: productResponse?.uses,
    origin: productResponse?.origin,
    maxQuantity: productResponse?.maxQuantity,
    createdAt: productResponse?.createdAt,
    totalViews: productResponse?.totalViews,
  }
}

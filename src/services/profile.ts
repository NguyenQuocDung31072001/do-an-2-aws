import { axiosInstance } from "../config/axiosInstance"

export const getProfile = async () => {
  const res = await axiosInstance.get("profile")
  return res
}

export const updateProfile = async (data: {
  fullName?: string
  phoneNumber?: string
  address?: string
}) => {
  const res = await axiosInstance.patch(
    "profile/me",
    {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      address: data.address,
    },
  )
  return res
}

export const changePassword = async (data: {
  currentPassword: string
  newPassword: string
}) => {
  const res = await axiosInstance.patch(
    "/profile/change-password",
    {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    },
  )

  return res
}

export const getPurchases = async () => {
  const res = await axiosInstance.get(
    "/profile/purchases",
  )
  return res
}

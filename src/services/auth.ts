import { axiosInstance } from "../config/axiosInstance"

export const loginServices = async (data: {
  email: string
  password: string
}) => {
  const res = await axiosInstance.post(
    "auth/login",
    {
      email: data.email,
      password: data.password,
    },
  )
  return res
}
export const registerServices = async (data: {
  fullName: string
  email: string
  password: string
  passwordConfirmation: string
}) => {
  const res = await axiosInstance.post(
    "auth/register",
    {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      passwordConfirmation:
        data.passwordConfirmation,
    },
  )
  return res
}

export const logoutServices = async () => {
  const res = await axiosInstance.get(
    "auth/logout",
  )
  return res
}

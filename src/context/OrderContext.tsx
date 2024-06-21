import React, {
  PropsWithChildren,
  createContext,
} from "react"
import { IPropsCartItem } from "../pages/cart/component/CartItem"

interface OrderContextProps {
  //state
  email: string
  fullName: string
  phoneNumber: string
  shipingAddress: string
  paymentMethod: string
  products: IPropsCartItem[]

  //setState
  setEmail: React.Dispatch<
    React.SetStateAction<string>
  >
  setFullName: React.Dispatch<
    React.SetStateAction<string>
  >
  setPhoneNumber: React.Dispatch<
    React.SetStateAction<string>
  >
  setShippingAddress: React.Dispatch<
    React.SetStateAction<string>
  >
  setPaymentMethod: React.Dispatch<
    React.SetStateAction<string>
  >
  setProducts: React.Dispatch<
    React.SetStateAction<IPropsCartItem[]>
  >
}
const OrderProvider =
  createContext<OrderContextProps>(
    {} as OrderContextProps,
  )

export const useOrderContext = () => {
  return React.useContext(OrderProvider)
}

export const OrderContextProvider: React.FC<
  Pick<
    PropsWithChildren<OrderContextProps>,
    "children"
  >
> = ({ children }) => {
  const [email, setEmail] =
    React.useState<string>("")
  const [fullName, setFullName] =
    React.useState<string>("")
  const [phoneNumber, setPhoneNumber] =
    React.useState<string>("")
  const [shipingAddress, setShippingAddress] =
    React.useState<string>("")
  const [paymentMethod, setPaymentMethod] =
    React.useState<string>("COD")
  const [products, setProducts] = React.useState<
    IPropsCartItem[]
  >([])

  const values = {
    email,
    setEmail,
    fullName,
    setFullName,
    phoneNumber,
    setPhoneNumber,
    shipingAddress,
    setShippingAddress,
    paymentMethod,
    setPaymentMethod,
    products,
    setProducts,
  }
  return (
    <OrderProvider.Provider value={values}>
      {children}
    </OrderProvider.Provider>
  )
}

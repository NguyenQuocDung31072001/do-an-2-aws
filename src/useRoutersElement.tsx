//router
import {
  useRoutes,
  Outlet,
  useNavigate,
} from "react-router-dom"

//pages
import HomePages from "./pages/home/HomePages"
import IntroducePages from "./pages/introduce/IntroducePages"
import ProductPages from "./pages/product/ProductPages"
import HandbookPages from "./pages/handbook/HandbookPages"
import ProductDetail from "./pages/detail/ProductDetail"
import HandbookView from "./pages/handbookView/HandbookView"
import LoginPages from "./pages/auth/LoginPages"
import RegisterPages from "./pages/auth/RegisterPages"
import ResetPasswordPages from "./pages/auth/ResetPassword"
import CartPages from "./pages/cart/CartPages"

//component
import MainHeader from "./components/header/MainHeader"
import MainFooter from "./components/footer/MainFooter"

//constant
import { PathRouter } from "./constant/path.router"
import ShippingPages from "./pages/shipping/ShippingPages"
import PaymentPages from "./pages/payment/PaymentPages"

//asset
import Logo from "./assets/logo-with-text.svg"
import CheckoutResult from "./pages/checkout_result/CheckoutResult"
import ProfilePages from "./pages/profile/ProfilePages"
import ProfileChangePasswordPages from "./pages/profile/ProfileChangePasswordPages"
import ProfilePurchase from "./pages/profile/ProfilePurchase"
import ProfileInfoPages from "./pages/profile/ProfileInfoPages"
import Logout from "./pages/profile/Logout"
import React from "react"
import { OrderContextProvider } from "./context/OrderContext"

function ParentComponent() {
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!window.localStorage.getItem("email")) {
      navigate(PathRouter.LOGIN)
    }
  }, [])

  return (
    <div>
      <MainHeader />
      <div className="mt-[130px]"></div>
      <Outlet />
      <MainFooter />
    </div>
  )
}

function AuthLayout() {
  const navigate = useNavigate()
  React.useEffect(() => {
    if (window.localStorage.getItem("email")) {
      navigate(PathRouter.HOME)
    }
  }, [])

  return (
    <div className="h-[calc(100vh-130px)] bg-gray-100">
      <MainHeader />
      <div className="mt-[130px]"></div>
      <Outlet />
    </div>
  )
}
function CartLayout() {
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!window.localStorage.getItem("email")) {
      navigate(PathRouter.LOGIN)
    }
  }, [])
  return (
    <div className=" bg-gray-50">
      <MainHeader />
      <div className="mt-[130px]"></div>
      <Outlet />
    </div>
  )
}

function CheckoutLayout() {
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!window.localStorage.getItem("email")) {
      navigate(PathRouter.LOGIN)
    }
  }, [])
  return (
    <div className=" h-[calc(100vh-130px)] bg-primaryRed px-16">
      <div
        className="flex w-full justify-center bg-white py-4"
        onClick={() => navigate(PathRouter.HOME)}
      >
        <img
          src={Logo}
          className="h-[50px] cursor-pointer object-cover"
        />
      </div>
      <Outlet />
    </div>
  )
}

export default function useRoutersElement() {
  const routerElement = useRoutes([
    {
      path: "/",
      element: <ParentComponent />,
      children: [
        {
          path: PathRouter.HOME,
          element: <HomePages />,
        },
        {
          path: PathRouter.ABOUT,
          element: <IntroducePages />,
        },
        {
          path: PathRouter.PRODUCT,
          element: <ProductPages />,
        },
        {
          path: PathRouter.HANDBOOK,
          element: <HandbookPages />,
        },
        {
          path: PathRouter.HANDBOOK_VIEW,
          element: <HandbookView />,
        },
        {
          path: `${PathRouter.DETAIL}/:id`,
          element: <ProductDetail />,
        },
        {
          path: PathRouter.PROFILE,
          element: <ProfilePages />,
          children: [
            {
              path: PathRouter.PROFILE,
              element: <ProfileInfoPages />,
            },
            {
              path: PathRouter.PROFILE_PURCHASES,
              element: <ProfilePurchase />,
            },
            {
              path: PathRouter.PROFILE_CHANGE_PASSWORD,
              element: (
                <ProfileChangePasswordPages />
              ),
            },
            {
              path: PathRouter.LOGOUT,
              element: <Logout />,
            },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: PathRouter.LOGIN,
          element: <LoginPages />,
        },
        {
          path: PathRouter.REGISTER,
          element: <RegisterPages />,
        },
        {
          path: PathRouter.RESET_PASSWORD,
          element: <ResetPasswordPages />,
        },
      ],
    },
    {
      path: "/",
      element: <CartLayout />,
      children: [
        {
          path: PathRouter.CART,
          element: <CartPages />,
        },
      ],
    },
    {
      path: PathRouter.CHECKOUT,
      element: <CheckoutLayout />,
      children: [
        {
          path: PathRouter.SHIPPING,
          element: <ShippingPages />,
        },
        {
          path: PathRouter.PAYMENT,
          element: <PaymentPages />,
        },
        {
          path: PathRouter.CHECKOUT_RESULT,
          element: <CheckoutResult />,
        },
      ],
    },
  ])

  return routerElement
}

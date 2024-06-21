import React from "react"
import InputWithOutline from "../../components/input/InputWithOutline"
import DefaultCheckbox from "../../components/checkbox/DefaultCheckbox"
import {
  Link,
  useNavigate,
} from "react-router-dom"
import { PathRouter } from "../../constant/path.router"
import { useMutation } from "react-query"
import { loginServices } from "../../services/auth"
import {
  ToastContainer,
  toast,
} from "react-toastify"

export default function LoginPages() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] =
    React.useState<string>("")
  const [checkedRemember, setCheckedRemember] =
    React.useState<boolean>(false)

  const navigate = useNavigate()

  const { mutateAsync: loginApi } = useMutation({
    mutationKey: ["login_service"],
    mutationFn: loginServices,
  })

  React.useEffect(() => {
    if (window.localStorage.getItem("account")) {
      setEmail(
        JSON.parse(
          window.localStorage.getItem(
            "account",
          ) || "",
        )?.email,
      )
      setCheckedRemember(true)
    }
  }, [])
  const handleLogin = () => {
    loginApi({
      email: email,
      password: password,
    })
      .then((res) => {
        if (!res?.data?._id) return
        toast.success(
          "Bạn đã đăng nhập thành công!",
        )
        window.localStorage.setItem(
          "email",
          res?.data?.email,
        )
        if (checkedRemember) {
          window.localStorage.setItem(
            "account",
            JSON.stringify({
              email: res?.data?.email,
            }),
          )
          navigate(PathRouter.HOME)
        } else {
          window.localStorage.removeItem(
            "account",
          )
          navigate(PathRouter.HOME)
        }
      })
      .catch((e) => {
        toast.error(
          e.response.data.message.message,
        )
      })
  }
  return (
    <div className="flex w-full items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="my-16 flex w-[50%] flex-col items-center justify-center rounded-[2px] bg-white p-8 shadow-sm">
        <div className="w-full ">
          <p className="font-serif text-[24px] font-bold text-primaryRed">
            Đăng nhập
          </p>
          <div className="mb-4 h-1 w-[50%] bg-primaryYellow"></div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <InputWithOutline
            type="text"
            name="Email"
            value={email}
            setValue={setEmail}
          />
          <div className="w-full py-2" />
          <InputWithOutline
            type="password"
            name="Mật khẩu"
            value={password}
            setValue={setPassword}
          />
          <div className="mt-4 mb-2 flex w-full items-center justify-between">
            <DefaultCheckbox
              checkedRemember={checkedRemember}
              setCheckedRemember={
                setCheckedRemember
              }
            />
            <Link to={PathRouter.RESET_PASSWORD}>
              <span className="text-primaryRed">
                Quên mật khẩu?
              </span>
            </Link>
          </div>
          <button
            className="mb-4 w-full rounded-[10px] bg-primaryRed/90 py-2 text-white duration-300 hover:bg-primaryRed"
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
          <span className="font-normal">
            Bạn chưa có tài khoản?
            <Link to={PathRouter.REGISTER}>
              <span className="text-primaryRed">
                Đăng ký ngay
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

import React from "react"
import InputWithOutline from "../../../components/input/InputWithOutline"
import DefaultCheckbox from "../../../components/checkbox/DefaultCheckbox"

export default function FormAuth() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] =
    React.useState<string>("")
  return (
    <div className="my-16 flex w-[50%] flex-col items-center justify-center rounded-[2px] bg-white p-8 shadow-sm">
      <p className="font-serif text-[24px] font-bold text-primaryRed">
        Đăng nhập
      </p>
      <div className="mb-4 h-1 w-[50%] bg-primaryYellow"></div>
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
          <DefaultCheckbox checkedRemember />
          <p>Quên mật khẩu?</p>
        </div>
        <button className="mb-4 w-full rounded-[10px] bg-primaryRed/90 py-2 text-white duration-300 hover:bg-primaryRed">
          Đăng nhập
        </button>
        <span className="font-normal">
          Bạn chưa có tài khoản?
          <span className="text-primaryRed">
            Đăng ký ngay
          </span>
        </span>
      </div>
    </div>
  )
}

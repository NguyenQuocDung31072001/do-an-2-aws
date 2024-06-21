import React from "react"
import InputWithOutline from "../../components/input/InputWithOutline"
import { useMutation } from "react-query"
import { changePassword } from "../../services/profile"
import {
  ToastContainer,
  toast,
} from "react-toastify"

export default function ProfileChangePasswordPages() {
  const [currentPass, setCurrentPass] =
    React.useState<string>("")
  const [newPass, setNewPass] =
    React.useState<string>("")
  const [confirmPass, setConfirmPass] =
    React.useState<string>("")

  const { mutateAsync: changePasswordMutation } =
    useMutation({
      mutationKey: ["change_password"],
      mutationFn: changePassword,
    })
  const handleChangePassword = () => {
    if (newPass !== confirmPass) {
      toast.error(
        "Nhập lại password không đúng!",
        {
          pauseOnHover: false,
        },
      )
      return
    }
    changePasswordMutation({
      currentPassword: currentPass,
      newPassword: newPass,
    })
      .then((res) => {
        toast.success(
          "Đổi mật khẩu thành công!",
          {
            pauseOnHover: false,
          },
        )
        return
      })
      .catch((e) => {
        toast.error("Sai mật khẩu!", {
          pauseOnHover: false,
        })
      })
  }
  return (
    <div>
      <ToastContainer />
      <p className="font-serif text-[24px] font-bold text-primaryRed">
        Cập nhật thông tin
      </p>
      <div className="h-1 w-[50%] bg-primaryYellow" />
      <div className="my-2">
        <InputWithOutline
          type="password"
          name="Mật khẩu hiện tại"
          value={currentPass}
          setValue={setCurrentPass}
        />
      </div>
      <div className="my-2">
        <InputWithOutline
          type="password"
          name="Mật khẩu mới"
          value={newPass}
          setValue={setNewPass}
        />
      </div>
      <div className="my-2">
        <InputWithOutline
          type="password"
          name="Nhập lại mật khẩu mới"
          value={confirmPass}
          setValue={setConfirmPass}
        />
      </div>
      <button
        className="flex w-full justify-center rounded-[10px] bg-primaryRed/90 py-2 text-white duration-300 hover:bg-primaryRed"
        onClick={handleChangePassword}
      >
        Đổi mật khẩu
      </button>
    </div>
  )
}

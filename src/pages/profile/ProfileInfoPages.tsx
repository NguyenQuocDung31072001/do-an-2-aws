import React from "react"
import InputWithOutline from "../../components/input/InputWithOutline"
import {
  getProfile,
  updateProfile,
} from "../../services/profile"
import {
  useMutation,
  useQuery,
} from "react-query"
import {
  ToastContainer,
  toast,
} from "react-toastify"

export default function ProfileInfoPages() {
  const [name, setName] =
    React.useState<string>("")
  const [email, setEmail] =
    React.useState<string>("")
  const [phone, setPhone] =
    React.useState<string>("")
  const [address, setAddress] =
    React.useState<string>("")
  //react query
  const { data, refetch: getProfileQuery } =
    useQuery({
      queryKey: ["profile"],
      queryFn: getProfile,
      enabled: false,
    })

  const { mutateAsync: updateProfileMutation } =
    useMutation({
      mutationKey: ["update_profile"],
      mutationFn: updateProfile,
    })

  //useEffect
  React.useEffect(() => {
    getProfileQuery()
  }, [])
  React.useLayoutEffect(() => {
    if (!data?.data) return
    const profileInfo = data.data

    setName(profileInfo.fullName)
    setEmail(profileInfo.email)
    setPhone(profileInfo.phoneNumber)
    setAddress(profileInfo.address)
  }, [data])

  const handleUpdateProfile = () => {
    updateProfileMutation({
      fullName: name,
      address: address,
      phoneNumber: phone,
    }).then((res) => {
      toast.success(
        "Cập nhật thông tin thành công",
        {
          pauseOnHover: false,
        },
      )
      getProfile()
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
          type="text"
          name="Email"
          value={email}
          setValue={setEmail}
        />
      </div>
      <div className="my-2">
        <InputWithOutline
          type="text"
          name="Họ tên"
          value={name}
          setValue={setName}
        />
      </div>
      <div className="my-2">
        <InputWithOutline
          type="text"
          name="Điện thoại"
          value={phone}
          setValue={setPhone}
        />
      </div>
      <div className="my-2">
        <InputWithOutline
          type="text"
          name="Địa chỉ"
          value={address}
          setValue={setAddress}
        />
      </div>
      <button
        className="flex w-full justify-center rounded-[10px] bg-primaryRed/90 py-2 text-white duration-300 hover:bg-primaryRed"
        onClick={handleUpdateProfile}
      >
        Cập nhật
      </button>
    </div>
  )
}

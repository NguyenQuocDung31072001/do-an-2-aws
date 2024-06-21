import React from "react"

export default function IntroducePages() {
  const aboutRef =
    React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className="flex w-full">
        <div className="h-[600px] w-[50%] bg-primaryRed bg-pattern bg-cover bg-center px-16 py-36">
          <p className="font-serif text-[48px] font-bold text-primaryYellow">
            Giới thiệu
          </p>
          <div className="h-[8px] w-[150px] bg-primaryYellow"></div>
          <p className="py-8 text-white/50 ">
            Công Ty TNHH MTV Yến Sào DaniNest với
            sản phẩm chính là yến sào được hình
            thành với sứ mệnh đem đến tay người
            tiêu dùng trên khắp lãnh thổ Việt Nam
            và bạn bè quốc tế sản phẩm Yến Sào
            Viêt Nam được đánh giá ngon nhất thế
            giới do người Việt làm ra
          </p>
          <div
            className="flex w-[250px] cursor-pointer items-center justify-center rounded-[50px] bg-primaryYellow p-4 font-bold text-primaryRed duration-200 hover:bg-white/90 hover:text-primaryYellow"
            onClick={() =>
              aboutRef?.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            TÌM HIỂU THÊM
          </div>
        </div>
        <div className="h-[600px] w-[50%] bg-about-hero bg-cover bg-center "></div>
      </div>
      <div
        ref={aboutRef}
        className="bg-gray-100/80 px-16 py-16"
      >
        <div className="rounded-[10px] bg-white px-16 py-8 drop-shadow-md">
          <p className="font-serif text-[36px] font-bold">
            Sứ mệnh
          </p>
          <p className="my-4 font-serif text-[20px] font-medium">
            Từ những đặc tính quý giá của yến sào
            mà thiên nhiên ban tặng, Công Ty TNHH
            MTV Yến Sào DaniNest với sản phẩm
            chính là yến sào được hình thành với
            sứ mệnh đem đến tay người tiêu dùng
            trên khắp lãnh thổ Việt Nam và bạn bè
            quốc tế sản phẩm Yến Sào Viêt Nam được
            đánh giá ngon nhất thế giới do người
            Việt làm ra.
          </p>
          <p className="font-serif text-[36px] font-bold">
            Giá trị cốt lõi
          </p>
          <ul className="ml-8 list-disc">
            <li className="my-2 font-serif text-[20px] font-medium">
              Trong thời đại công nghiệp 4.0 nhưng
              có những thứ chỉ khi được làm bằng
              tay mới thực sự tốt và giá trị. Yến
              sào cũng như vậy. Từ khâu hái tổ,
              đến sơ chế, loại bỏ những sợi lông
              nhỏ xíu khỏi sợi yến, đến việc cách
              thủy để giữ trọn vi chất từ tổ yến,
              tất cả những công đoạn trên được
              chúng tôi châm chút làm thủ công.
            </li>
            <li className="my-2 font-serif text-[20px] font-medium">
              Để cho ra các dòng sản phẩm chất
              lượng cao cấp giữ lại 100% giá trị
              dinh dưỡng có trong tổ yến.
            </li>
            <li className="my-2 font-serif text-[20px] font-medium">
              Đa dạng hóa các chủng loại, qui cách
              đóng gói, kích cỡ bao bì nhằm tạo sự
              thuận tiện, phục vụ cho nhu cầu sữ
              dụng đa dạng phù hợp với tất cả mọi
              người.
            </li>
          </ul>
          <p className="font-serif text-[36px] font-bold">
            Cam kết
          </p>
          <p className="my-4 font-serif text-[20px] font-medium">
            Với phương châm chất lượng là tiên
            quyết nên chính sách bán hàng của Công
            ty là cam kết tiền 300% cho khách hàng
            nếu chứng minh trong sản phẩm của Công
            ty có hàng giả.
          </p>
        </div>
      </div>
    </div>
  )
}

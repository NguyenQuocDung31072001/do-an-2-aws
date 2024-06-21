import React from "react"
import FeaturedImage from "../../assets/handbook/featured-image.jpg"
import View1 from "../../assets/handbook/view1.png"
import View2 from "../../assets/handbook/view2.png"

export default function HandbookView() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const renderNomalText = (text: string) => {
    return (
      <p className="py-2 text-[18px] antialiased">
        {text}
      </p>
    )
  }
  const renderTitleText = (text: string) => {
    return (
      <p className="py-4 text-[24px] font-bold antialiased">
        {text}
      </p>
    )
  }
  const renderTextCenter = (text: string) => {
    return (
      <div className="w-full px-32 py-8">
        <p className="text-center text-[20px] font-bold antialiased">
          {text}
        </p>
      </div>
    )
  }
  const renderLine = (
    <div className="h-1 w-full bg-gray-300"></div>
  )
  return (
    <div className="relative flex flex-col items-center justify-center">
      <p className="z-10 mt-8 mb-64 text-[30px] font-bold">
        Cách ăn yến sào tốt cho sức khỏe
      </p>
      <div className="absolute top-[100px] z-0 h-[800px] w-full bg-featured-image bg-cover bg-center"></div>
      <div className=" z-10 my-8 w-[90%] rounded-[10px] bg-gray-100 p-8">
        {renderNomalText(`Sau đây là những điều bạn nên lưu ý để
          biết cách ăn yến sào tốt cho sức khỏe.`)}

        {renderTitleText(
          `Ăn yến khi nào tốt nhất?`,
        )}
        {renderNomalText(`Các chuyên gia dinh dưỡng khuyên rằng
          thời điểm tốt nhất để ăn yến sào là khi
          bụng đang rỗng. Bạn có thể ăn yến sào
          vào buổi sáng mới thức dậy hoặc buổi tối
          trước khi đi ngủ.`)}
        {renderLine}
        {renderTextCenter(`Khoảng 1 tiếng trước khi ngủ, nồng độ
            của các loại hormone tăng lên giúp
            tăng khả năng hấp thu các dưỡng chất
            vào cơ thể. Đây là thời điểm chất dinh
            dưỡng phát huy công dụng tốt nhất cho
            cơ thể.`)}
        {renderLine}
        {renderNomalText(
          `Ngoài ra, bạn cũng có thể ăn yến sào vào giữa hai bữa ăn chính khi bụng còn rỗng. Đây là thời điểm thức ăn trước đó đã được tiêu hóa nên bạn có thể bổ sung thêm dinh dưỡng. Yến sào sẽ giúp các cơ quan tiêu hóa khởi động nhẹ nhàng và hấp thu dưỡng chất vào cơ thể.`,
        )}

        {renderTitleText(
          `Ăn yến sào bao nhiêu là đủ?`,
        )}
        <div className="flex justify-center">
          <img src={View1} alt="" className="" />
        </div>
        {renderNomalText(
          `Cơ thể con người có giới hạn về khả năng hấp thụ dưỡng chất ở một thời điểm nhất định. Dinh dưỡng dư thừa do không hấp thu được sẽ thải ra ngoài theo đường tiêu hóa. Vì thế, bạn không nên ăn yến sào quá nhiều kể cả khi đang mệt mỏi hoặc ốm đau. Bạn cũng cần biết cách ăn yến sào theo từng độ tuổi nhất định để cân nhắc liều lượng hợp lý.`,
        )}
        {renderNomalText(
          `Các chuyên gia khuyến cáo về liều lượng yến sào theo độ tuổi như sau:`,
        )}
        <ul className="my-4 ml-8 list-disc text-[18px]">
          <li className="my-2">
            <span className="mr-1 font-bold">
              Trẻ em 1 – 12 tuổi:
            </span>
            3g yến sào khô/lần
          </li>
          <li>
            <span className="mr-1 font-bold">
              Trẻ vị thành niên và người lớn:
            </span>
            5g – 10g yến sào khô/lần
          </li>
        </ul>
        {renderNomalText(
          `Đối với trẻ nhỏ, bạn nên cẩn thận khi cho bé ăn yến sào vì đây là một trong những thực phẩm tưởng lợi hóa hại cho trẻ. Bạn không nên cho trẻ ăn yến sào quá sớm, nhất là trẻ sơ sinh hay trẻ mới bắt đầu tập ăn giặm nhé.`,
        )}
        {renderLine}
        {renderTextCenter(
          `Bạn cần chế biến yến sào khô đúng cách và không nên kết hợp với nhiều nguyên liệu khác. Hãy luôn nhớ rằng cơ thể không hấp thụ được dưỡng chất khi ăn yến sào sẽ bị đào thải. Vì vậy, bạn không nên ăn quá nhiều sẽ rất phí phạm.`,
        )}
        {renderLine}
        {renderTitleText(
          `Ăn yến sào bao lâu thì có tác dụng?`,
        )}
        <div className="flex justify-center">
          <img src={View2} alt="" className="" />
        </div>
        {renderNomalText(
          `Như đã đề cập ở trên, cơ thể chúng ta có giới hạn khi hấp thụ dưỡng chất ở một thời điểm nhất định. Dinh dưỡng không được hấp thụ sẽ bị đào thải ra ngoài.`,
        )}
        {renderNomalText(
          `Vì thế, bạn chỉ cần ăn yến sào một lượng nhỏ đều đặn sẽ mang đến nhiều lợi ích hơn là ăn một lượng nhiều dồn vào một lần. Bạn có thể cân đối liều lượng yến sào theo từng đối tượng cụ thể sau đây:`,
        )}
        <ul className="my-4 ml-8 list-disc text-[18px]">
          <li className="my-2">
            <span className="mr-1 font-bold">
              Trẻ em :
            </span>
            Bé 1 – 3 tuổi chỉ nên dùng 50g/tháng
            và dùng đều cách ngày. Bé 3 – 10 tuổi
            có thể ăn yến sào 100g/tháng, dùng đều
            đặn cách ngày 1 lần khoảng 6-7g/lần.
          </li>
          <li className="my-2">
            <span className="mr-1 font-bold">
              Phụ nữ mang thai:
            </span>
            Phụ nữ mang thai trong 3 tháng đầu
            không nên ăn yến sào. Phụ nữ mang thai
            tháng 4 – 7 có thể ăn trung bình
            100g/tháng, dùng đều đặn cách ngày
            khoảng 7g/lần. Phụ nữ mang thai tháng
            8 – 9 nên giảm liều lượng 70g/tháng,
            dùng cách ngày khoảng 5g/lần.
          </li>
          <li className="my-2">
            <span className="mr-1 font-bold">
              Người lớn tuổi:
            </span>
            Yến sào đặc biệt tốt cho người lớn
            tuổi, đặc biệt là người già cần hồi
            phục sức khỏe sau khi đau ốm, phẫu
            thuật.
          </li>
          <li className="my-2">
            <span className="mr-1 font-bold">
              Người đau ốm:
            </span>
            Người bệnh đang trong giai đoạn điều
            trị có thể dùng đều đặn mỗi ngày 1
            chén yến chưng đường phèn với liều
            lượng 5g/lần, trung bình dùng khoảng
            150g/tháng. Tuy nhiên, yến sào chỉ là
            thực phẩm bồi bổ sức khỏe chứ hoàn
            toàn không có chức năng chữa bệnh như
            “thuốc tiên” như lời đồn thổi.
          </li>
          <li className="my-2">
            <span className="mr-1 font-bold">
              Người bình thường:
            </span>
            Nếu bạn muốn tăng cường sức khỏe thì
            nên ăn yến sào lâu dài và đều đặn 2
            lần/tuần với liều lượng khoảng 5g/lần
            là đủ.
          </li>
        </ul>
        {renderLine}
        {renderTextCenter(
          `Để ăn yến sào đúng cách, bạn cần tìm hiểu kỹ về liều lượng và cách chế biến. Cách ăn yến sào đơn giản nhất là chưng cách thủy. Đây là cách chế biến tốt nhất đảm bảo nhiệt độ của yến sào không vượt quá 100°C, nhờ đó dưỡng chất sẽ được giữ lại.`,
        )}
        {renderLine}
        {renderNomalText(
          `Nếu chế biến yến sào theo cách khác, bạn sẽ khó mà điều chỉnh nhiệt độ. Nhiệt độ cao có thể phá hủy các dưỡng chất tự nhiên có trong yến sào. Trong trường hợp bạn muốn sử dụng yến sào như một nguyên liệu của món ăn, bạn vẫn nên chưng cách thủy trước khi cho vào món ăn đã hoàn thành.`,
        )}
        {renderNomalText(
          `Bạn có thể ăn yến sào trong giai đoạn cơ thể mỏi mệt hoặc mua làm quà biếu ba mẹ để bồi bổ sức khỏe đều đặn trong suốt một thời gian dài. Nếu biết cách ăn yến sào, bạn sẽ cảm thấy cơ thể tăng sức bền bỉ và dẻo dai hơn. Bạn đừng đợi đến khi ốm nặng mới dám mua yến sào về dùng, yến sào không phải như thuốc tiên mà hết bệnh liền!`,
        )}
      </div>
    </div>
  )
}

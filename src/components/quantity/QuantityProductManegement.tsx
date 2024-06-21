import React from "react"
import PlusIcon from "../../icon/PlusIcon"
import MinusIcon from "../../icon/MinusIcon"
import InputBasic from "../input/InputBasic"

interface IProps {
  quantityChoosed: number
  setQuantityChoosed: React.Dispatch<
    React.SetStateAction<number>
  >
}
export default function QuantityProductManegement({
  quantityChoosed,
  setQuantityChoosed,
}: IProps) {
  return (
    <div className="grid grid-cols-2 rounded-[20px] bg-gray-100 py-2">
      <div className="col-span-1 flex items-center justify-center">
        <p>Số lượng:</p>
      </div>
      <div className="col-span-1 flex w-[200px] items-center justify-between">
        <div className="cursor-pointer rounded-[50px] bg-gray-300 p-[2px]">
          <MinusIcon
            className="h-4 w-4 font-bold text-white"
            onClick={() => {
              if (quantityChoosed === 1) return
              setQuantityChoosed(
                quantityChoosed - 1,
              )
            }}
          />
        </div>
        <div className="flex items-center">
          <InputBasic
            value={quantityChoosed}
            setValue={setQuantityChoosed}
          />
          <p className="ml-2 font-medium">
            sản phẩm
          </p>
        </div>
        <div className="cursor-pointer rounded-[50px] bg-gray-300 p-[2px]">
          <PlusIcon
            className="h-4 w-4 font-bold text-white"
            onClick={() =>
              setQuantityChoosed(
                quantityChoosed + 1,
              )
            }
          />
        </div>
      </div>
    </div>
  )
}

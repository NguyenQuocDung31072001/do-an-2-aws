import React from "react"
import ReactDom from "react-dom"
import { motion } from "framer-motion"

export interface IPropsModalCommon {
  open: boolean
  setOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >
  title: React.ReactNode
  content: React.ReactNode
  footer: React.ReactNode
  okText?: React.ReactNode
}
export default function ModalCommon({
  open,
  setOpen,
  title,
  content,
  footer,
  okText,
}: IPropsModalCommon) {
  const root = document.getElementById(
    "root",
  ) as HTMLElement

  if (!open) return <></>

  const CancelIcon = (
    <div className="flex h-[20px] justify-end">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 cursor-pointer rounded-[2px] duration-100 hover:border-2 hover:border-pink-300/80"
          onClick={() => setOpen(!open)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  )

  const renderHeader = (
    <div className="font-bold">{title}</div>
  )
  const renderContent = (
    <div className="">{content}</div>
  )
  const renderFooter = (
    <div className="">{footer}</div>
  )

  const renderLine = (
    <div className="h-[1px] w-full bg-gray-300"></div>
  )
  return ReactDom.createPortal(
    <div
      onScroll={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <div
        className="fixed top-0 z-40 flex h-[100vh] w-[100vw] items-center justify-center bg-black/40"
        onClick={() => setOpen(!open)}
      ></div>
      <motion.div
        className="fixed top-[50%] left-[50%] z-50 w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[2px] bg-white py-4"
        initial={{
          y: -300,
          x: "-50%",
          opacity: 0,
        }}
        animate={{ y: "-50%", opacity: 1 }}
        exit={{
          y: "-50%",
          x: "-50%",
          opacity: 0,
        }}
      >
        <div className="px-8">{CancelIcon}</div>
        <div className="px-8 py-2">
          {renderHeader}
        </div>
        {renderLine}
        <div className="px-8 py-2">
          {renderContent}
        </div>
        {renderLine}
        <div className="px-8 py-2">
          {renderFooter}
        </div>
        <div className="flex justify-end px-8">
          {okText}
        </div>
      </motion.div>
    </div>,
    root,
  )
}

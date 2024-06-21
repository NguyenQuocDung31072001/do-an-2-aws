import React from "react"
import ModalCommon, {
  IPropsModalCommon,
} from "../components/modal/ModalCommon"

export default function useModalCommon() {
  const [open, setOpen] =
    React.useState<boolean>(false)

  const renderModal = ({
    title,
    content,
    footer,
    okText,
  }: Omit<
    IPropsModalCommon,
    "open" | "setOpen"
  >) => (
    <ModalCommon
      open={open}
      setOpen={setOpen}
      title={title}
      content={content}
      footer={footer}
      okText={okText}
    />
  )
  return {
    open,
    setOpen,
    renderModal,
  }
}

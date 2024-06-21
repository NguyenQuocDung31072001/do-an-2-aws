import React from "react"
import StepByStep from "../components/step/StepByStep"

export default function useStepForm() {
  const [current, setCurrent] = React.useState(0)
  const [listTitle, setListTitle] =
    React.useState<string[]>([])

  const renderStepForm = React.useMemo(() => {
    return (
      <StepByStep
        listTitle={listTitle}
        current={current}
      />
    )
  }, [listTitle, current])

  const gotoStep = (number: number) => {
    if (number < 0 || number > listTitle.length) {
      return
    }
    setCurrent(number)
  }
  return {
    current,
    gotoStep,
    listTitle,
    setListTitle,
    renderStepForm,
  }
}

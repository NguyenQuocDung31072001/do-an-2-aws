export const convertToVNPrice = (
  _input: string | number | undefined,
) => {
  const check = Number(_input || "")

  if (check !== 0 && !check) return

  const input: number = Number(_input)

  return input.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })
}

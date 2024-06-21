export const getOriginPath = (
  pathName: string,
) => {
  return pathName.split("/")?.[1]
}

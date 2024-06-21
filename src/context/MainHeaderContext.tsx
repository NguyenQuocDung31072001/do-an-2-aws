import React, {
  PropsWithChildren,
  createContext,
} from "react"

interface MainHeaderContextProps {
  detailCategoryInfo: any

  setDetailCategoryInfo: React.Dispatch<
    React.SetStateAction<any>
  >
}
const MainHeaderContext =
  createContext<MainHeaderContextProps>(
    {} as MainHeaderContextProps,
  )

export const useMainHeaderContext = () => {
  return React.useContext(MainHeaderContext)
}

export const MainHeaderContextProvider: React.FC<
  Pick<
    PropsWithChildren<MainHeaderContextProps>,
    "children"
  >
> = ({ children }) => {
  const [
    detailCategoryInfo,
    setDetailCategoryInfo,
  ] = React.useState({} as any)

  const values = {
    detailCategoryInfo,
    setDetailCategoryInfo,
  }

  return (
    <MainHeaderContext.Provider value={values}>
      {children}
    </MainHeaderContext.Provider>
  )
}

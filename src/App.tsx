import "./App.css"
import { OrderContextProvider } from "./context/OrderContext"
import useRoutersElement from "./useRoutersElement"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const routerElement = useRoutersElement()

  return (
    <div className="">
      <OrderContextProvider>
        {routerElement}
      </OrderContextProvider>
    </div>
  )
}

export default App

import React from "react"
import { useNavigate } from "react-router-dom"
import { PathRouter } from "../../constant/path.router"

export default function Logout() {
  const navigate = useNavigate()
  React.useEffect(() => {
    navigate(PathRouter.HOME)
  }, [])
  return <div>Logout</div>
}

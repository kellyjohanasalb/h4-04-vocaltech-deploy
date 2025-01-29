import { useRoutes, BrowserRouter,Navigate } from 'react-router-dom'
import Login from '../Login'
import {Registronuevo} from"../../modules/auth/pages/Registronuevo"
import { Adminpage } from '../../modules/Panel Admin/pages/Adminpage'
const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Login /> },
    {path: '/registro', element: <Registronuevo /> },
    {path:"/Paneladmin", element:<Adminpage/>},
    {path: "*",
      element: <Navigate to="/" replace />,}
    
])
return routes

}
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App

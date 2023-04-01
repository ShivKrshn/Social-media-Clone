import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Leftbar from "./components/Leftbar/Leftbar";
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";


function App() {

  const {darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display:'flex'}}>
          <Leftbar/>
          <div style={{flex: 6}}>
          <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    )
  };

  const ProfileLayout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <Outlet/>
      </div>
    )
  };


  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to='/Login' />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
    ]
    },
    {
      path: "/Profile/:id",
      element: <ProtectedRoute><ProfileLayout/></ProtectedRoute>,
      children: [
        {
          path: "/Profile/:id",
          element: <Profile/>
        }
      ]
    },
    {
      path: "/Profile/:id",
      element: <Profile/>
    },
    {
      path: "/Login",
      element: <Login/>,
    },
    {
      path: "/Register",
      element: <Register/>,
    }
  ]);
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

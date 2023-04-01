import { Link } from "react-router-dom";
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SocialisApp</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="home">
            <HomeOutlinedIcon fontSize="small" />
          </span>
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon fontSize="small" onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon fontSize="small" onClick={toggle} />
        )}
        <GridViewOutlinedIcon fontSize="small" />
        <div className="search">
          <SearchOutlinedIcon fontSize="small" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <ForumOutlinedIcon fontSize="small" />
        <EmailOutlinedIcon fontSize="small" />
        <NotificationsNoneOutlinedIcon fontSize="small" />
        <div className="user">
          <Link
            to={`/Profile/${currentUser.id}`}
            style={{ textDecoration: "none" }}
          >
            <img src={currentUser.profilePic} alt="" />
          </Link>
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

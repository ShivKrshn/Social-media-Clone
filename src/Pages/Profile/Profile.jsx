import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import EditIcon from "@mui/icons-material/Edit";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import MoreDropdown from "../../components/Dropdowns/MoreDropdown";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="profile">
      <div className="profileContainer">
        <div className="images">
          <div className="left"></div>
          <img
            src="https://images.pexels.com/photos/133633/pexels-photo-133633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="coverImg"
          />
          <button className="coverEdit">
            <div className="icon">
              <AddAPhotoIcon fontSize="small" />
            </div>
            <span>Edit Cover Photo</span>
          </button>
          <img
            src="https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="profilePic"
          />
          <button className="profileEdit">
            <AddAPhotoIcon fontSize="medium" />
          </button>
        </div>
        <div className="userInfo">
          <div className="left">
            <span className="name">{currentUser.name}</span>
            <span className="friends">200 Friends</span>
            <div className="social">
              <a href="https://www.facebook.com/">
                <FacebookTwoToneIcon sx={{fontSize:"32px", }}/>
              </a>
              <a href="https://www.instagram.com/" >
                <InstagramIcon sx={{fontSize:"32px"}}/>
              </a>
              <a href="https://twitter.com/" >
                <TwitterIcon sx={{fontSize:"32px"}} />
              </a>
              <a href="https://www.linkedin.com/home" >
                <LinkedInIcon sx={{fontSize:"32px"}} />
              </a>
              <a href="https://in.pinterest.com/login/" >
                <PinterestIcon sx={{fontSize:"32px"}}/>
              </a>
            </div>
          </div>
          <div className="right">
            <button>+ Add a Story</button>
            <button>
              <EditIcon fontSize="small" /> Edit Profile
            </button>
          </div>
        </div>
        <hr/>
        <div className="options">
          <div className="left">
            <button>Posts</button>
            <button>About</button>
            <button>Friends</button>
            <button>Photos</button>
            <button>Videos</button>
            <MoreDropdown/>
          </div>
          <div className="right">
            <MoreHorizOutlinedIcon/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

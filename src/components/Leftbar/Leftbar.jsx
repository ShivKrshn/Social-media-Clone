import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./leftbar.scss";

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <Link to={`/Profile/${currentUser.id}`} style={{ textDecoration: "none", textDecorationColor: "none" }}>
            <div className="user">
              <img src={currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>
            </div>
          </Link>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/880/880441.png"
              alt=""
            />
            <span>Friends</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/719/719726.png"
              alt=""
            />
            <span>Groups</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7511/7511667.png"
              alt=""
            />
            <span>Market Place</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4406/4406124.png"
              alt=""
            />
            <span>Watch</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1584/1584942.png"
              alt=""
            />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9356/9356266.png"
              alt=""
            />
            <span>Events</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1722/1722368.png"
              alt=""
            />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1040/1040241.png"
              alt=""
            />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2839/2839026.png"
              alt=""
            />
            <span>Videos</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png"
              alt=""
            />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6704/6704154.png"
              alt=""
            />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8388/8388497.png"
              alt=""
            />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7688/7688675.png"
              alt=""
            />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;

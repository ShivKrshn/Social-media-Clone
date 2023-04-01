import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/AuthContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  const comments = [
    {
      id: 3,
      name: "Sai Thilak",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Enjoying the trip without us.Be ready to face psychoism shiva prasad.Waiting...........",
      img: "https://images.pexels.com/photos/5721903/pexels-photo-5721903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Shiva Prasad",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/953457/pexels-photo-953457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Granite Buddha statue in carton package",
      img: "https://images.pexels.com/photos/4464484/pexels-photo-4464484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>submit</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <div className="date">1 min ago</div>
        </div>
      ))}
    </div>
  );
};

export default Comments;

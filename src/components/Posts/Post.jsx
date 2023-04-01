import "./post.scss";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Link } from "react-router-dom";
import Comments from "../Comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {
  const liked = false;
  const [commentOpen, setCommentOpen] = useState(false);

  const commentHandler = () => {
    setCommentOpen(!commentOpen);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/Profile/${post.userId}`}
                style={{ textDecoration: "none" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? (
              <FavoriteOutlinedIcon fontSize="small" color="primary"/>
            ) : (
              <FavoriteBorderOutlinedIcon fontSize="small" />
            )}
            12 Likes
          </div>
          <div className="item" onClick={commentHandler}>
            <CommentOutlinedIcon fontSize="small" />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon fontSize="small" />
            Share
          </div>
        </div>
        {commentOpen && <Comments/>}
      </div>
    </div>
  );
};

export default Post;

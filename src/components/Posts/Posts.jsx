import "./posts.scss";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "ShivKrishn",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Old house on pier in ocean at sunset",
      img: "https://images.pexels.com/photos/4969993/pexels-photo-4969993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    {
      id: 3,
      name: "Sai Thilak",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Vintage TV set on walkway under cement construction",
      img: "https://images.pexels.com/photos/5721903/pexels-photo-5721903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (<div className="posts">
    {posts.map(post => (
        <div className="post">
            <Post post={post} key={post.id}/>
        </div>
    ))}
  </div>);
};

export default Posts;

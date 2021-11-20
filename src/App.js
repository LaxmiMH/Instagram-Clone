import "./App.css";
import Post from "./Components/Post";
import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      userName: "shree",
      caption: "wow it works fine",
      imageUrl:
        "https://media.istockphoto.com/photos/image-of-female-creative-graphic-designer-working-on-color-selection-picture-id1057613484",
    },
    {
      userName: "Laxmi",
      caption: "Nature is beautiful",
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg",
    },
  ]);
  return (
    <div className="app">
      {/*heder*/}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>Hii start with new project🚀</h1>
      {/*post*/}
   {
     posts.map( (post) => 
     
     <Post userName = {post.userName} caption = {post.caption} imageUrl = {post.imageUrl}  />
     )
   }
     
    </div>
  );
}

export default App;

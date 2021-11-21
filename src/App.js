import "./App.css";
import Post from "./Components/Post";
import React, { useState, useEffect } from "react";
import { db } from './firebase' 

function App() {
  const [posts, setPosts] = useState([]);

//useEffectn runs a piece of code based on a specific condtion
  useEffect( () =>{  
    db.collection('posts').onSnapshot( snapshot => {
    //every time a new post is added this code fire thats y we used onsnapshot method
    setPosts( snapshot.docs.map( (doc) => 
    ({id: doc.id,
      post: doc.data()
    })
    )  )
} )
      
  }, [] )



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
      {posts.map(({id, post}) => (
        <Post
          key ={id}
          userName={post.userName}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;

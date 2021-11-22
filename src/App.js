import "./App.css";
import Post from "./Components/Post";
import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from "@material-ui/core";


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);


  const [posts, setPosts] = useState([]);
  const [open, setOpen] =useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //useEffectn runs a piece of code based on a specific condtion
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      //every time a new post is added this code fire thats y we used onsnapshot method
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);


  const signUp = (event) =>{
   event.preventDefault();
   auth.createUserWithEmailAndPassword(email, password)
   .catch( (error)=> console.log(error) )
  }

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={ () => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {
          <div style={modalStyle} className={classes.paper}>
            <form className="app__signUp">
           <center>
            <img
              className="app__headerImage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt=""
          />
          </center>
           
          <Input
          placeholder="username"
          type="text"
          value={username}
          onChange = {(e) => setUsername(e.target.value)}
           />
           
            <Input
          placeholder="email"
          type="text"
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
           />
             <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
           />

           <Button onClick={signUp}>Sign Up</Button>
            </form>

          </div>
        }
      </Modal>

      {/*heder*/}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>


        <Button onClick={() => setOpen(true)} >SignUp</Button>



      <h1>Hii start with new project🚀</h1>
      {/*post*/}
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          userName={post.userName}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;

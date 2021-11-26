import { Button } from "@material-ui/core";
import React, { useState } from "react";
import firebase from "firebase/compat";
import { storage, db } from "./firebase";
import './ImageUpload.css'

const ImageUpload = ({ username }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const hadleUpload = (event) => {
      event.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state Changed",
      (snapShot) => {
        //progress function
        const progress = Math.round(
          (snapShot.bytesTransferred / snapShot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //errorr function
        console.log(error);
        alert(error);
      },
      () => {
        //complete function
        console.log(username);
        console.log(firebase.firestore)
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //post images inside db
            db.collection("posts").add({
               
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              userName: username
            });
            setProgress(0);
            setCaption('');
            setImage(null)
          });
      }
    );
  };
  return (
    <div className="imageUpload">
     
      {/* captio input */}
      {/* file picker */}
      {/* post button */}
      <progress value={progress} className="imageUpload__progress" max="100" />
      <input
        type="text"
        placeholder="Enter a Caption... "
        onChange={(event) => setCaption(event.target.value)}
        value={caption}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={hadleUpload}>Upload</Button>
    </div>
  );
};

export default ImageUpload;

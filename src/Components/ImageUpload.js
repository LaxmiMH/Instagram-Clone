import { Button } from '@material-ui/core'
import React ,{useState} from 'react'
import {storage, db} from '..firebase'
const ImageUpload = () => {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null) ;
    const [progress, setProgress] = useState(0);

    const handleChange = (event) =>{
        if(event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    }

    const hadleUpload = (event) =>{
          console.log(event.target.value)
    }
    return (
        <div>
            <h1>Image</h1>
            {/* captio input */}
             {/* file picker */}     
             {/* post button */}    
             <input type="text" placeholder="Enter a Caption... " 
             onChange={ (event) => setCaption(event.target.value) } value={caption}/>
             <input type="file" onChange={handleChange}   />
             <Button onClick={hadleUpload} >Upload</Button>

        </div>
    )
}

export default ImageUpload

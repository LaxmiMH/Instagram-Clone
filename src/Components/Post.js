import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

const Post = ({userName, imageUrl, caption}) => {
    return (
        <div className="post">
            
            {/*header = avatar + username*/}
            <div class="post__header">
            <Avatar  className="post__avatar" alt="Laxmi" src="/static/images/avatar/1.jpg" />
            <h3>{userName}</h3>
            </div>

           
            {/* image */}
            <img className="post__Image"
            src={imageUrl}
             alt=""/>

            {/*username + caption*/}
            <h4 className="post__text"><strong>laxmi</strong> {caption}</h4>

        </div>
    )
}

export default Post


import React from "react";
import "./Post.css";

interface Props {
  username: string;//agregado
  profile: any;//agregado
  location?: string;//agregado
  image: any;
  like: number;
  caption?: string;
}

const Post: React.FC<Props> = ({
  username,
  profile,
  location,
  image,
  like,
  caption
}) => {
  function likee() {}

  return (
    <div className="post">
      <div className="postHeader">
        <div className="postHeader__profile">
          <img src={profile} alt="Profile" />
        </div>
        <div className="userAndLocation">
          <div className="userAndLocation__username">{username}</div>
          {location && (
            <div className="userAndLocation__location">{location}</div>
          )}
        </div>
      </div>
      <div className="postImage">
        <div className="postImageHolder">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="postCaption">
        <span className="postCaption__username">{username}</span> &nbsp;
        <button className="heart" onClick={likee}>
          like
        </button>
        <span className="postCaption__username">{like}</span> &nbsp;
        {caption && <span className="postCaption__caption">{caption}</span>}
      </div>
    </div>
  );
};

export default Post;

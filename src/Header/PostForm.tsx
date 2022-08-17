import React, { useState, useRef } from "react";
import ReactDom from "react-dom";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import db from "./../firebase";
import { v4 as uuidv4 } from "uuid";

interface Props {
  open: boolean;
  close: any;
}

const defaultProfile = "https://bit.ly/3iP8rhj";

const PostForm: React.FC<Props> = ({ open, close }) => {
  const [username, setUsername] = useState("");
  // const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [like, setLike] = useState("0");
  const [caption, setCaption] = useState("");

  const inputFile = useRef(null);
  let randomId = uuidv4(32);

  const imageHandler = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const createNewPost = (e: any) => {
    e.preventDefault();

    if (username && image) {
      db.collection("posts").doc(randomId).set({
        id: randomId,
        profile: defaultProfile,
        username,
        image,
        like,
        caption,
        location,
        date: Date.now()
      });

      setUsername("");
      // setProfile("");
      setImage("");
      setLike("0");
      setCaption("");
      setLocation("");
      close();

      randomId = uuidv4(32);
    } else {
      alert("Enter a username and image");
    }
  };

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="modalOverlay" onClick={close} />
      <div className="postForm">
        <form>
          <div className="postFormTop">
            <div className="postFormTop__username postFormTop__inputs">
              <div className="postForm__inputLabel">Username: </div>
              <input
                onChange={(e: any) => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder="Emiliano"
                required
              />
            </div>
            <div className="postFormTop__location postFormTop__inputs">
              <div className="postForm__inputLabel">Location: </div>

              <input
                onChange={(e: any) => setLocation(e.target.value)}
                value={location}
                type="text"
                placeholder="Buenos Aires,Argentina"
              />
            </div>
          </div>
          <div className="postFormBottom">
            <div>
              {image && (
                <div className="postFormBottom__imageHolder">
                  <img src={image} alt="" />
                </div>
              )}

              <div className="postFormBottom__caption">
                <textarea
                  onChange={(e: any) => setCaption(e.target.value)}
                  value={caption}
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
            <div>
              <div className="postFormBottom__image">
                <button type="button" onClick={() => inputFile.current.click()}>
                  <ImageOutlinedIcon />
                </button>
                <input
                  ref={inputFile}
                  type="file"
                  onChange={imageHandler}
                  style={{ display: "none" }}
                  required
                />
              </div>
            </div>
          </div>
          <button className="postBtn" onClick={createNewPost} type="submit">
            Post
          </button>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default PostForm;

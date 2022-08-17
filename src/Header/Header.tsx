import React, { useState } from "react";
import PostForm from "./PostForm";
import AddIcon from "@material-ui/icons/Add";
import "./Header.css";

const Header: React.FC = () => {
  const [postForm, setPostForm] = useState(false);

  return (
    <>
      <PostForm open={postForm} close={() => setPostForm(false)} />
      <div className="header">
        <header>
          <nav className="header__navBar">
            <div className="header__navBar__holder">
              <div className="header__instagramImg">
                <a href="#">
                  <img src="https://bit.ly/3shQkDG" alt="Instagram" />
                </a>
              </div>
              <div className="headerIcons">
                <button
                  onClick={(e: any) => setPostForm((prev) => !prev)}
                  aria-label="Add post"
                  className="headerIcons__addPostBtn tooltipBtn"
                >
                  <AddIcon
                    fontSize="small"
                    className="headerIcons__addPostIcon materialIcon"
                  />
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;

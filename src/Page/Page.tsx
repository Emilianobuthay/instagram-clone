import React, { useState, useEffect } from "react";
import Post from "./../Post/Post";
import db from "./../firebase";
import "./Page.css";

const Page: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("date", "asc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <main className="page">
      {posts.map((post) => {
        return (
          <Post
            username={post.username}
            profile={post.profile}
            location={post.location}
            image={post.image}
            like={post.like}
            caption={post.caption}
            key={post.id}
          />
        );
      })}
    </main>
  );
};

export default Page;

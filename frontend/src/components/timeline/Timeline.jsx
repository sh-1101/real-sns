import React, { useEffect, useState } from "react";
import "./Timeline.css";
import Share from "../share/Share";
import Post from "../post/Post";
// import { Posts } from "../../dummyData";
import axios from "axios";

export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/64a178f177cad556c5c5a06f");
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

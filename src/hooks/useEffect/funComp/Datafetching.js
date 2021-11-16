import React, { useState, useEffect } from "react";
import axios from "axios";

function Datafetching() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div>
      <p>Description: "{post.body}"</p>
      {/* <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <h4> Title: {post.title}</h4>
            <p>Description: {post.body}</p>
          </li>
        ))}
      </ol> */}
    </div>
  );
}

export default Datafetching;

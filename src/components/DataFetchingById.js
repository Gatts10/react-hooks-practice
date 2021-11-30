import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingById() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);

  const handleClick = () => {
      setIdFromBtnClick(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromBtnClick]);
  //useEffect é dependente deste id

  return (
    <div>
      <label>Post by id</label>
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="button" onClick={handleClick}>Fetch Post</button>
        <ul>
          <li>{post.title}</li>
        </ul>
      </div>
    </div>
  );
}

export default DataFetchingById;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

export default function Best() {


  //bazamiz
  const [posts, setPosts] = useState([]);
  //baza yuklenerken gelir loading
  const [loading, setLoading] = useState(false);
  //cari sehife
  const [currentPage, setCurrentPage] = useState(1);
//sehifede olacaq post sayi
  const [postsPerPage, setPostsPerPage] = useState(5);
  //componentdid mount evezi use Effect
  useEffect(() => {
    const fetchPosts = async () => {
        //baza yuklenerken loading olsun
      setLoading(true);
      const res = await axios.get("http://localhost:3000/publications");
      //datani post statene menimsedirik
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  //sonuncu post sayi
  const indexOfLastPost = currentPage * postsPerPage;
  //birinci post 
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
}

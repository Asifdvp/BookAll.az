import React, {useEffect, useState} from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

export default  function Best(){
    //state evezi
const [posts,setPosts] = useState([])
const [loading,setLoading] = useState(false);
const [currentPage,setCurrentPage] = useState(1);
const [postsPerPage,setPostsPerPage] = useState(10);
//componentdid mount evezi use Effect
useEffect(()=>{
    const fetchPosts = async () =>{
        setLoading(true);
        const res = await axios.get('http://localhost:3000/publications')
        setPosts(res.data);
        setLoading(false);
    }
    fetchPosts()
    // fetch('http://localhost:3000/publications/')
    // .then(res => res.json())
    // .then(data => setData(data))
},[]);

// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
       // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
<>
   
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
   
  </>

//             <section className="main">
            
//         <section >
//                     <div className="main-content">
//                         <div className="xett"></div>
//                         <h1>Azərbaycan Nəşrləri</h1>
//                         <div className="xett"></div>
                       
//                     </div>
//                     <div className="cards">
// {data
// .map(item=>(
//  <div className="card">
//  <div className="card-img">
//      <img alt="img" className="cardi" src={a_one} />
//      <div >
//          <AiFillHeart className="heart" onClick={(e)=>{
//  e.target.classList.toggle("heart-color")
//          }} />
//      </div>
//  </div>
//  <Link to="product">
//      <div className="card-context">
//          <p>
//              <ul>
// <li> Kitab adı:{item.book_name}  </li>
// <li>   Yazar :{item.book_author}  </li>
// <li>   Janr :{item.genre_name}  </li>
//                  </ul>
//              </p>
//      </div>
//  </Link>
//  <div className="price">
//    {item.book_price} AZN
//      <img src={sebet} alt="sebet" />
//  </div>

// </div>
// ))}
                       

//                     </div>
//                 </section>
  
  
  
  
   
// </section>

        )
    }

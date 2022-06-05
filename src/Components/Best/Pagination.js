import React from 'react';
import { Link } from 'react-router-dom';
export default function Pagination({postsPerPage,totalPosts,paginate}){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className='main' style={{
        "display":"flex",
        "justifyContent":"center",
        "marginTop":"-60px"

      }}>
        <ul className='pagination' >
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <Link onClick={(e) => {
                // console.log(e.target.textContent)
paginate(number)
              }   }    to="/best" className='page-link' >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

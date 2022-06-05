// import axios from "axios";
//  import React,{useState,useEffect} from 'react';

let initialState = {
  cart: [],
  goods: [
    {
      id: 1,
      publication_name: "aze",
      genre_name: "roman",
      book_img: "./azerbaycan/1.jpg",
      book_name: "Malva",
      book_author: "Maxim Qorki",
      book_price: 3,
    },
    {
      id: 2,
      publication_name: "aze",
      genre_name: "roman",
      book_img: "a_two",
      book_name: "Firildaqci",
      book_author: "Maxim Qorki",
      book_price: 4,
    },
    {
      id: 3,
      publication_name: "aze",
      genre_name: "roman",
      book_img: "a_three",
      book_name: "Ana",
      book_author: "Maxim Qorki",
      book_price: 5,
    },
    {
      id: 4,
      publication_name: "aze",
      genre_name: "dedektiv",
      book_img: "a_four",
      book_name: "Cinayet ve Ceza",
      book_author: "Dostoyevski",
      book_price: 4,
    },
    {
      id: 5,
      publication_name: "aze",
      genre_name: "dedektiv",
      book_img: "a_five",
      book_name: "Boyuk oyun",
      book_author: "Cingiz Abdullayev",
      book_price: 5,
    },
    {
      id: 6,
      publication_name: "aze",
      genre_name: "dedektiv",
      book_img: "a_six",
      book_name: "Xeste ruhlar",
      book_author: "Elxan Elatli",
      book_price: 3,
    },
    {
      id: 7,
      publication_name: "aze",
      genre_name: "fantastika",
      book_img: "a_seven",
      book_name: "Qaranlig gunes",
      book_author: "Zaur Penehov",
      book_price: 3,
    },
    {
      id: 8,
      publication_name: "aze",
      genre_name: "fantastika",
      book_img: "a_eight",
      book_name: "Ecineler Denizi",
      book_author: "Rick Riordan",
      book_price: 5,
    },
    {
      id: 9,
      publication_name: "aze",
      genre_name: "fantastika",
      book_img: "a_nine",
      book_name: "Felsefe dasi",
      book_author: "C.K.Roulinq",
      book_price: 6,
    },
    {
      id: 10,
      publication_name: "aze",
      genre_name: "fantastika",
      book_img: "a_ten",
      book_name: "Alov qedehi",
      book_author: "C.K.Roulinq",
      book_price: 8,
    },
  ],
};

function reducer(state = initialState, action) {

    // const [a,bs] = useState([]);
    // useEffect(()=>{
    //     fetch("http://localhost:3000/aze/")
    //     .then(res=>res.json())
    //     .then(data=>bs(data))
    
    // })


  switch (action.type) {
    case "ADD_TO_CARD":
      let good = state.goods.find((elem) => {
        return elem.id === action.payload.id8;
      });
      const cart = [...state.cart, good];
      return {
        ...state,
        cart,
      };

    default:
      return state;
  }
}
export default reducer;

// import axios from "axios";
//  import React,{useState,useEffect} from 'react';

let initialState = {
  nesr: [],
  cart: [],
  publics:[],
  goods: [
      {
        id: 1,
        publication_name: "aze",
        genre_name: "roman",
        book_img:
          "https://static.insales-cdn.com/images/products/1/6776/544881272/2022-05-11-09-26-171652246777.jpg",
        book_name: "Malva",
        book_author: "Maxim Qorki",
        book_price: 3,
        nesr: "Azerbaycan",
      },
      {
        id: 2,
        publication_name: "aze",
        genre_name: "roman",
        book_img:
          "https://static.insales-cdn.com/images/products/1/2745/350628537/Qorki_Firildaqci_qapaq_Mini_Esas.png",
        book_name: "Firildaqci",
        book_author: "Maxim Qorki",
        book_price: 4,
        nesr: "Azerbaycan",
      },
      {
        id: 3,
        publication_name: "aze",
        genre_name: "roman",
        book_img:
          "https://pdfmiraz.s3.us-east-2.amazonaws.com/uploads/posts/2022-04/s1536839523.webp",
        book_name: "Ana",
        book_author: "Maxim Qorki",
        book_price: 5,
        nesr: "Azerbaycan",
      },
      {
        id: 4,
        publication_name: "aze",
        genre_name: "dedektiv",
        book_img:
          "https://altunkitab.az/storage/439/conversions/cinayet_ve_ceza-blade.jpg",
        book_name: "Cinayet ve Ceza",
        book_author: "Dostoyevski",
        book_price: 4,
        nesr: "Azerbaycan",
      },
      {
        id: 5,
        publication_name: "aze",
        genre_name: "dedektiv",
        book_img:
          "https://static.insales-cdn.com/images/products/1/5114/171070458/af34ffdff697961ab14ea5ef0a53ea4c.jpg",
        book_name: "Boyuk oyun",
        book_author: "Cingiz Abdullayev",
        book_price: 5,
        nesr: "Azerbaycan",
      },
      {
        id: 6,
        publication_name: "aze",
        genre_name: "dedektiv",
        book_img:
          "https://static.insales-cdn.com/images/products/1/7083/282418091/Xeste-ruhlar--uz-qabigi-cover_1559112417.jpg",
        book_name: "Xeste ruhlar",
        book_author: "Elxan Elatli",
        book_price: 3,
        nesr: "Azerbaycan",
      },
      {
        id: 7,
        publication_name: "aze",
        genre_name: "fantastika",
        book_img:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525721625l/40056904._SY475_.jpg",
        book_name: "Qaranlig gunes",
        book_author: "Zaur Penehov",
        book_price: 3,
        nesr: "Azerbaycan",
      },
      {
        id: 8,
        publication_name: "aze",
        genre_name: "fantastika",
        book_img:
          "https://static.insales-cdn.com/images/products/1/5640/281769480/Persi_Cekson_2_qapaq.png",
        book_name: "Ecineler Denizi",
        book_author: "Rick Riordan",
        book_price: 5,
        nesr: "Azerbaycan",
      },
      {
        id: 9,
        publication_name: "aze",
        genre_name: "fantastika",
        book_img:
          "https://upload.wikimedia.org/wikipedia/az/thumb/4/4e/Coan_Roulinq._Harri_Potter_v%C9%99_F%C9%99ls%C9%99f%C9%99_Da%C5%9F%C4%B101.jpg/235px-Coan_Roulinq._Harri_Potter_v%C9%99_F%C9%99ls%C9%99f%C9%99_Da%C5%9F%C4%B101.jpg",
        book_name: "Felsefe dasi",
        book_author: "C.K.Roulinq",
        book_price: 6,
        nesr: "Azerbaycan",
      },
      {
        id: 10,
        publication_name: "aze",
        genre_name: "fantastika",
        book_img:
          "https://static.insales-cdn.com/images/products/1/1306/208954650/large_235px-Harri_Potter_v%C9%99_Alov_Q%C9%99d%C9%99hi.jpg",
        book_name: "Alov qedehi",
        book_author: "C.K.Roulinq",
        book_price: 8,
        nesr: "Azerbaycan",
      },
      {
        id: 11,
        publication_name: "tr",
        genre_name: "roman",
        book_img:
          "https://static.insales-cdn.com/images/products/1/7989/171081525/large_095ff7d33371d08b45fa495155d84850.jpg",
        book_name: "Tutmuyanlar",
        book_author: "Oguz Atay",
        book_price: 5,
        nesr: "Turk",
      },
      {
        id: 12,
        publication_name: "tr",
        genre_name: "roman",
        book_img:
          "http://www.bilimsel.com.tr/wp-content/uploads/2014/12/html5.gif",
        book_name: "HTML,CSS",
        book_author: "Osman Beshirov",
        book_price: 4,
        nesr: "Turk",
      },
      {
        id: 13,
        publication_name: "tr",
        genre_name: "roman",
        book_img:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581711698l/32953916._SY475_.jpg",
        book_name: "Karantina",
        book_author: "Beyza Alkoc",
        book_price: 7,
        nesr: "Turk",
      },
      {
        id: 14,
        publication_name: "tr",
        genre_name: "roman",
        book_img:
          "https://i.dr.com.tr/cache/500x400-0/originals/0001846817001-1.jpg",
        book_name: "Ruyamsin",
        book_author: "Mira Yelkenci",
        book_price: 3,
        nesr: "Turk",
      },
      {
        id: 15,
        publication_name: "tr",
        genre_name: "dedektiv",
        book_img:
          "https://img.kitapyurdu.com/v1/getImage/fn:128592/wh:true/wi:800",
        book_name: "Kanli pazar",
        book_author: "Osman Aysu",
        book_price: 5,
        nesr: "Turk",
      },
      {
        id: 16,
        publication_name: "tr",
        genre_name: "dedektiv",
        book_img:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1600672251l/55402976.jpg",
        book_name: "Caylak",
        book_author: "Nihal Orhan",
        book_price: 4,
        nesr: "Turk",
      },
      {
        id: 17,
        publication_name: "tr",
        genre_name: "dedektiv",
        book_img:
          "https://images-na.ssl-images-amazon.com/images/I/41bonKt8XVL._SX316_BO1,204,203,200_.jpg",
        book_name: "Kayip",
        book_author: "Osman Aysu",
        book_price: 3,
        nesr: "Turk",
      },
      {
        id: 18,
        publication_name: "tr",
        genre_name: "fantastika",
        book_img:
          "https://img.kitapyurdu.com/v1/getImage/fn:11465936/wh:true/wi:800",
        book_name: "Copculer",
        book_author: "Darrin Simson",
        book_price: 8,
        nesr: "Turk",
      },
      {
        id: 19,
        publication_name: "tr",
        genre_name: "fantastika",
        book_img:
          "https://i.idefix.com/cache/600x600-0/originals/0000000689235-1.jpg",
        book_name: "Sahmeran",
        book_author: "Mehmet Erdogan",
        book_price: 5,
        nesr: "Turk",
      },
      {
        id: 20,
        publication_name: "tr",
        genre_name: "fantastika",
        book_img: "https://cdn.bkmkitap.com/ejderha-gelin-10589743-71-O.jpg",
        book_name: "Ejderha gelin",
        book_author: "Yeliz Cam",
        book_price: 6,
        nesr: "Turk",
      },
      {
        id: 21,
        publication_name: "eng",
        genre_name: "roman",
        book_img:
          "https://images-na.ssl-images-amazon.com/images/I/91teiIZ5vwL.jpg",
        book_name: "War and Peace",
        book_author: "Leo Tolstoy",
        book_price: 5,
        nesr: "English",
      },
      {
        id: 22,
        publication_name: "eng",
        genre_name: "roman",
        book_img: "https://m.media-amazon.com/images/I/51px8VdiH6L.jpg",
        book_name: "The trial",
        book_author: "Franz Kafka",
        book_price: 7,
        nesr: "English",
      },
      {
        id: 23,
        publication_name: "eng",
        genre_name: "roman",
        book_img:
          "https://images-na.ssl-images-amazon.com/images/I/51BCViYIESL._SX347_BO1,204,203,200_.jpg",
        book_name: "The Stranger",
        book_author: "Albert Camus",
        book_price: 5,
        nesr: "English",
      },
      {
        id: 24,
        publication_name: "eng",
        genre_name: "dedektiv",
        book_img:
          "https://images-na.ssl-images-amazon.com/images/I/91CDLMuuW+L.jpg",
        book_name: "Enola Holmes",
        book_author: "Nancy Springer",
        book_price: 9,
        nesr: "English",
      },
      {
        id: 25,
        publication_name: "eng",
        genre_name: "dedektiv",
        book_img:
          "https://images-na.ssl-images-amazon.com/images/I/81Hq73lPrEL.jpg",
        book_name: "Sherlock Holmes",
        book_author: "A.Canondole",
        book_price: 7,
        nesr: "English",
      },
      {
        id: 26,
        publication_name: "eng",
        genre_name: "dedektiv",
        book_img: "https://m.media-amazon.com/images/I/51OozvBsPUL.jpg",
        book_name: "Kill Artist",
        book_author: "Daniel Silva",
        book_price: 4,
        nesr: "English",
      },
      {
        id: 27,
        publication_name: "eng",
        genre_name: "dedektiv",
        book_img: "https://m.media-amazon.com/images/I/51p0MkEW9dL.jpg",
        book_name: "Death Dedective",
        book_author: "E.Charlotte",
        book_price: 5,
        nesr: "English",
      },
      {
        id: 28,
        publication_name: "eng",
        genre_name: "fantastika",
        book_img: "https://m.media-amazon.com/images/I/51tLbtVconL.jpg",
        book_name: "Death reason",
        book_author: "Ferid Hexiyev",
        book_price: 4,
        nesr: "English",
      },
      {
        id: 29,
        publication_name: "eng",
        genre_name: "fanstastika",
        book_img: "https://m.media-amazon.com/images/I/51pRo5wpR4L.jpg",
        book_name: "The Witcher",
        book_author: "Andrzej Sapkovski",
        book_price: 8,
        nesr: "English",
      },
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    //sebete elave elemek
    case "ADD_TO_CARD":
      let good = state.goods.find((elem) => {
        return elem.id === action.payload.id;
      });
      
      const cart = [...state.cart, good];
      return {
        ...state,
        cart,
      };

      //nesrler bolmesi
    case "GO_TO_CARD":
      let cards = state.goods.filter(item =>{
        return item.nesr === action.payload.vale
    } );    
      const nesr = [cards]; 
      return {
        ...state,
        nesr:nesr,
      };
      //sebetden silmek
    case "DELETE_ITEM":
      let sebet = state.cart.filter((item,index)=>{
        return index !== action.payload.id
      });
      const newSebet = [sebet];

      return{
        ...state,
        cart:newSebet
      }
     


    // case "GO_TO_PUBLIC":
    //   const publics_card = state.goods.filter(item =>{
    //     return item.nesr === action.payload.vale
    // } );    
    //   const publics = [publics_card]; 
    //   return {
    //     ...state,
    //     publics,
    //   };

    default:
      return state;
  }
}
export default reducer;

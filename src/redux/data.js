import axios from "axios";
import React, { useEffect } from "react";

function data(){
    useEffect(()=>{
        let fetchData = async () => {
        let res = await axios.get('http://localhost:3000/publications');
        let data = res.data;
        }
        fetchData()
    },[]);
return {
{data} 
}

}
export default data;
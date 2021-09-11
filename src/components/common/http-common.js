import axios from 'axios';
const token=localStorage.getItem(`${process.env.SECRET_KEY}`)

export default axios.create({
    baseURL:`${process.env.REACT_APP_API_URL}`,
    headers:{
        "content-type":"application/json",'Authorization':`Bearer ${token}`

    }
    });
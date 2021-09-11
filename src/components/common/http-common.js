import axios from 'axios';
const token=localStorage.getItem(`${process.env.SECRET_KEY}`)

export default axios.create({
    baseURL:`https://tutoriaal.herokuapp.com`,
    headers:{
        "content-type":"application/json",'Authorization':`Bearer ${token}`

    }
    });
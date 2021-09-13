import axios from 'axios';
const token=localStorage.getItem("access-token")

export default axios.create({
    baseURL: `https://tutoriaal.herokuapp.com`,
    headers:{
        "content-type":"application/json",'Authorization':`Bearer ${token}`

    }
    });


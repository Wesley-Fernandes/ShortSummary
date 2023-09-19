import axios from "axios";

export default async function Search(){
    await axios.get("")
    .then((response) => {
        return response.data;
    })
    .catch((err) =>{
        return err.message;
    });
    
}
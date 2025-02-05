import axios from "axios";

const API = axios.create({
    baseURL: "http://www.omdbapi.com/"
})

// Creating a get Request function
export const getMovie = () => {
    return API.get("?s=avengers&apikey=522f43f8")
}
import axios from "axios";
import notiflix from "notiflix";
import SlimSelect from 'slim-select'
import loader from "css-loader";

new SlimSelect({
  select: '#breed-select'
})

axios.defaults.headers.common["x-api-key"] = "live_7u1513J1pLH6k4dsxR0sDujpDXqykt0NqVRRGuZsbLcOTa3MmbJ082NYemF7E1jn";
axios.defaults.baseURL='https://api.thecatapi.com/v1/breeds';

export function fetchBreeds(){
  return axios.get(`/breeds/`).then(Response=>{
    if (Response.ok){
      throw new Error(Response.status);
    }
    return (Response.status!==200);
    });
  }
  export function fetchCatByBreed(breedId){
    return axios.get(`/images/search?bread_ids=${dreedId}`).then(Response=>{
      if (!Response.ok){
        throw new Error(Response.status);
      }
      return (Response.status!==response.data);
    })
  }
 
 


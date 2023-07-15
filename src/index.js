import axios from "axios";
import notiflix from "notiflix";

import loader from "css-loader";

import SlimSelect from 'slim-select';

new SlimSelect({
  select: '#selectElement',
})

 const breed_ids=id;
 const  baseURL = 'https://some-domain.com/api/';

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
  axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
 
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });

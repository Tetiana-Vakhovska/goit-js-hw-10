import axios from "axios";
import notiflix from "notiflix";
import SlimSelect from 'slim-select'
import loader from "css-loader";

new SlimSelect({
  select: '#selectElement'
})

axios.defaults.headers.common["x-api-key"] = "live_7u1513J1pLH6k4dsxR0sDujpDXqykt0NqVRRGuZsbLcOTa3MmbJ082NYemF7E1jn";

 const select = document.querySelector('.js-breed-select');
  const container=document.querySelector('.js-breedId-list');
  const infoCat =document.querySelector('.js-cat-info');
  


function fetchBreeds(){
    const BASE_URL= 'https://api.thecatapi.com/v1/breeds';
   const ENDPOINT=id;

};
function fetchCatByBreed(evt){
evt.preventDefault();
const infoCat= evt.target.value.trim();
};

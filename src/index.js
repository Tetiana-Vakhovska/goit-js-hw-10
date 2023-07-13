import axios from "axios";
import notiflix from "notiflix";
import SlimSelect from 'slim-select'

new SlimSelect({
  select: '#selectElement'
})

axios.defaults.headers.common["x-api-key"] = "live_7u1513J1pLH6k4dsxR0sDujpDXqykt0NqVRRGuZsbLcOTa3MmbJ082NYemF7E1jn";
const elements={
  form:document.querySelector('.js-breedId'),
  container:document.querySelector('.js-breedId-list'),
  div:document.querySelector('.js-div.cat-info'),

}
function fetchBreeds(){
    const BASE_URL= 'https://api.thecatapi.com/v1/breeds';

};
function fetchCatByBreed(breedId){};

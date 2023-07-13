import axios from "axios";
import notiflix from "notiflix";
import SlimSelect from 'slim-select'

new SlimSelect({
  select: '#selectElement'
})

axios.defaults.headers.common["x-api-key"] = "live_7u1513J1pLH6k4dsxR0sDujpDXqykt0NqVRRGuZsbLcOTa3MmbJ082NYemF7E1jn";

function fetchBreeds(){
    const BASE_URL= 'https://api.thecatapi.com/v1/breeds';

};
function fetchCatByBreed(breedId){};

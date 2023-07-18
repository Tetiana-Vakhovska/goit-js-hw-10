import axios from "axios";
import notiflix from "notiflix";

import loader from "css-loader";
import {fetchBreeds} from './cat-api';
import {fetchCatByBreed} from './cat-api';
  

import SlimSelect from 'slim-select';


new SlimSelect({
  select: '#selectElement',
})
const selectIn = document.querySelector('.breed-select');
const catItem = document.querySelector('.cat-info');
const loardEL= document.querySelector('.loard');
const errorEl = document.querySelector('.error');


 let allCatArray={};



axios.defaults.headers.common["x-api-key"] = "live_7u1513J1pLH6k4dsxR0sDujpDXqykt0NqVRRGuZsbLcOTa3MmbJ082NYemF7E1jn";
axios.defaults.baseURL='https://api.thecatapi.com/v1/breeds';

function fetchBreeds(){
 
  }
  


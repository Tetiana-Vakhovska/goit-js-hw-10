import axios from "axios";
import Notiflix from "notiflix";
import {fetchBreeds, fetchCatByBreed} from './cat-api';
import SlimSelect from 'slim-select';
import './css/style.css';


const selectIn = document.querySelector('.breed-select');
const catItem = document.querySelector('.cat-info');
const loardEL= document.querySelector('.loard');
const errorEl = document.querySelector('.error');



selectIn.onchange = function fetchBreeds() {
    let item = selectIn.value;
    console.log(item);
}


selectIn.addEventListener('change', onSelectBreed);

function onSelectBreed(){
  let breedId =Event.currentTarget.value;
  fetchCatByBreed(breedId)
  .then(data=>{
    console.log(data);
    console.log(fetchCatByBreed);
    div.innerHTML=data.map(Element=>
      `<img src="${Element.url} alt="photo" width="500" hight="400"/>
      <h2>${Element.name}</h2>
      `)
      .join('');

  })
  
}




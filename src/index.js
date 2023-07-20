import axios from "axios";
import Notiflix from "notiflix";
import {fetchBreeds, fetchCatByBreed} from './cat-api';
import SlimSelect from 'slim-select';
import './css/style.css';


const selectIn = document.querySelector('.breed-select');
const catItem = document.querySelector('.cat-info');
const loardEL= document.querySelector('.loard');
const errorEl = document.querySelector('.error');



fetchBreeds().then(data=>{
  selectIn.innerHTML=data.map(elem=>'<option value="${elem.id}">${elem.name}</option>')
  .join("");
})
.catch(()=>loardEL.removeAttribute('hidden'))
.finally(()=>errorEl.setAttribute('hidden',true))

selectIn.addEventListener('change', onSelectBreed);

function onSelectBreed(event){
  let breedId =event.currentTarget.value;
  fetchCatByBreed(breedId)
  .then(data=>{
    console.log(data);
    console.log(fetchCatByBreed);
   div.innerHTML=data.map(element=>
      `<img src="${element.url} alt="photo" width="500" hight="400"/>
      <h2>${element.name}</h2>
      `)
      .join('');

  })
  
}




import axios from "axios";
import notiflix from "notiflix";


import {fetchBreeds} from './cat-api';
import {fetchCatByBreed} from './cat-api';
  

import SlimSelect from 'slim-select';



const selectIn = document.querySelector('.breed-select');
const catItem = document.querySelector('.cat-info');
const loardEL= document.querySelector('.loard');
const errorEl = document.querySelector('.error');

loardEL.classList.replace('loadEl','is-hidden');
errorEl.classList.add('is-hidden');
divCatInfo.classList.add('is-hidden');

 fetchBreeds()
 then.axios(data=> {
  arrBreedsId.push({Text:Element.name,value:Element.id});
  new SlimSelect({
    select: selectIn,
   
  });
 })
.catch(onFechError);

selectIn.addEventListener('change', onSelectBreed);
function onSelectBreed (event){
  loardEL.classList.replace('is-hidden','loadEl');
selectIn.classList.add('is-hidden');
divCatInfo.classList.add('is-hidden');
}
function createMarkup(arr){
  return arr.map(({
    poster,catName,description
  })=>
  `<img src="https://api.thecatapi.com/v1/images/search${poster}" alt ="${catName}"/>
  <h2>${description}
  `)
  .join('')
  console.log(createMarkup)
}
const breedId = event.currentTarget.value;
fetchCatByBreed(breedId)
then.axios(data=>{
  loardEL.classList.replace('loadEl', 'is-hidden');
  selectIn.classList.remove('is-hidden');
  const {url, breeds}=data[0];
})
axios.defaults.headers.common["x-api-key"] = "live_7u1513J1pLH6k4dsxR0sDujpDXqykt0NqVRRGuZsbLcOTa3MmbJ082NYemF7E1jn";
axios.defaults.baseURL='https://api.thecatapi.com/v1/breeds';
 axios.get(`https://api.thecatapi.com/v1/breeds_ids=${breedId}`)
 .then(({data})=>
 {return data;}
 )
.catch ((error)=>{
  console.log('error', error);
}
)



import axios from "axios";
import Notiflix from "notiflix";
import {fetchBreeds, fetchCatByBreed} from './cat-api';
import SlimSelect from 'slim-select';



const selectIn = document.querySelector('.breed-select');
const catItem = document.querySelector('.cat-info');
const loardEL= document.querySelector('.loard');
const errorEl = document.querySelector('.error');



 fetchBreeds()
 then.axios(data=> {
  arrBreedsId.push({Text:Element.name,value:Element.id});
  new SlimSelect({
    select: selectIn,
   
  });
 })
.catch(onFechError);

selectIn.addEventListener('change', onSelectBreed);

function onSelectBreed(){
  let breedId =Event.currentTarget.value;
  fetchCatByBreed(breedId)
  then.axios(data=>{
    console.log(data);
    console.log(fetchCatByBreed);
    div.innerHTML=data.map(Element=>
      `<img src="${Element.url} alt="photo" width="500" hight="400"/>
      <h2>${Element.name}</h2>
      `)
  })
  
}




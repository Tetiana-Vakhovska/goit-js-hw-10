import axios from "axios";
import Notiflix from "notiflix";
import {fetchBreeds, fetchCatByBreed} from './cat-api';
import SlimSelect from 'slim-select';



const selectIn = document.querySelector('.breed-select');
const div = document.querySelector('.cat-info');
const loardEL= document.querySelector('.loader');
const errorEl = document.querySelector('.error');




fetchBreeds()
.then(data=>{
  selectIn.innerHTML=data.map(elem=>`<option value="${elem.id}">${elem.name}</option>`)
  new SlimSelect({
    select: '#selectElement',
  })
  .join("");
})
.catch(()=>errorEl.removeAttribute('hidden'))
.finally(()=>loardEL.setAttribute("hidden",true))

selectIn.addEventListener('change', onSelectBreed);

function onSelectBreed(event){
  loardEL.removeAttribute("hidden")
  let breedId =event.currentTarget.value;
  fetchCatByBreed(breedId)
  .then(data=>{
    console.log(data);
    console.log(fetchCatByBreed);
   div.innerHTML=data.map(element=>
      `<img src="${element.url} alt="cat" width="500" hight="400"/>
      <h2>${element.name}</h2>
      `)
      .join('');
      data.map(element=>{
        element.breeds.forEach(cat => {
        const array =[cat]  
        const findCatById=array.find(option=> option.id === `${event.currentTarget.value}`)
        const markup = `<div class="flex"> 
        <h2>${findCatById.name}</h2>
        <p>${findCatById.description}</p>
        <h2>Temperament</h2>
        <p>${findCatById.temperament}</p>
        </div> `
        div.insertAdjacentHTML("beforeend", markup)
        });
      })
  })
  .catch(()=>{errorEl.remove('hideen')
  })
  .finally(()=>loardEL.setAttribute("hidden",true))
}




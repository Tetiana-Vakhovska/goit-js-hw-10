
import {fetchBreeds, fetchCatByBreed} from './cat-api';
import Notiflix from 'notiflix';


  

const selectIn = document.querySelector('.breed-select');
const div = document.querySelector('.cat-info');
const loardEL= document.querySelector('.loader');
const errorEl = document.querySelector('.error');

fetchBreeds()
.then(data=>{
  
  selectIn.innerHTML=data.map(elem=>`<option value="${elem.id}">${elem.name}</option>`)

  .join("");
}

)


selectIn.addEventListener('change', onSelectBreed);

function onSelectBreed(event){
 
 
  let breedId =event.target.value;
  fetchCatByBreed(breedId)
  .then(data=>{
    console.log(data);
    console.log(fetchCatByBreed);
   
   div.innerHTML=data.map(element=>
      `<img src="${element.url}" alt="cat" width="500" hight="400"/>
      `)
      .join('');
      data.map(element=>{
        element.breeds.forEach(cat => {
        const array =[cat]  
        const findCatById=array.find(option=> option.id === `${event.target.value}`)
        const markup = `<div class="flex"> 
        <h2>${findCatById.name}</h2>
        <p>${findCatById.description}</p>
        <h2>Temperament</h2>
        <p>${findCatById.temperament}</p>
        </div> `
        div.insertAdjacentHTML("beforeend", markup)
        });
       
      })
      if (data.length === 0) 
      {Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')}
      })
      .catch(errorFail)
      .finally(()=>loardEL.setAttribute("hidden",true),
      errorEl.setAttribute("hidden",true)
      )
    }
    
   

function errorFail (error){
  console.log(error)
  if (array.length === 0) 
  {Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')}
}
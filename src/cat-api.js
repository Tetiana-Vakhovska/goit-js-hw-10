
const options ={headers:{
    "key":'live_7u1513J1pLH6k4dsxR0sDujpDXqykt0NqVRRGuZsbLcOTa3MmbJ082NYemF7E1jn'
}
}
 export function fetchBreeds(){
    return fetch('${key}', options)
    .then( response=>{
        if (!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();
        
    })
}
export function fetchCatByBreed(breedId){
    return fetch('https://api.thecatapi.com/v1/images/search_ids=${breed.id}' , options)
    .then( (response)=>{
        if (!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();


})}
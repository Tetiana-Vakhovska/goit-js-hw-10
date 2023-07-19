
const options ={Headers:{
    "x-api-key":`live_7u1513J1pLH6k4dsxR0sDujpDXqykt0NqVRRGuZsbLcOTa3MmbJ082NYemF7E1jn`
}
}
 export function fetchBreeds(){
    return fetch(` https://api.thecatapi.com/v1/breeds`, options)
    .then( Response=>{
        if (!Response.ok){
            throw new Error(Response.statusText);
        }
        return Response.json();
        
    })
}
export function fetchCatByBreed(breedId){
    return fetch(` https://api.thecatapi.com/v1/breeds`, options)
    .then( (Response)=>{
        if (!Response.ok){
            throw new Error(Response.statusText);
        }
        return Response.json();


})}
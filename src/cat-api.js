
const options= {headers:
{ ["x-api-key"] : "live_7u1513J1pLH6k4dsxR0sDujpDXqykt0NqVRRGuZsbLcOTa3MmbJ082NYemF7E1jn"
}}

 export const fetchBreeds= function(){
    return fetch(`https://api.thecatapi.com/v1/breeds`,options)
    .then( response=>{
        if (!response.ok){
            throw new error(response.statusText);
        }
        return response.json();
        
    })
}
export const fetchCatByBreed = function fetchCatByBreed(breedId){
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, options)
    .then( (response)=>{
        if (!response.ok){
            throw new error (response.statusText);
        }
        return response.json();


})}
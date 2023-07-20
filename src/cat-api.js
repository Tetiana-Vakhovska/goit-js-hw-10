import axios from "axios";
axios.defaults.headers.common['x-api-key']='live_7u1513J1pLH6k4dsxR0sDujpDXqykt0NqVRRGuZsbLcOTa3MmbJ082NYemF7E1jn';
axios.defaults.baseURL='https://api.thecatapi.com/v1/'
 export function fetchBreeds(){
    return axios.get('./breeds/')
    .then( response=>{
        if (!response.ok){
            throw new error(response.statusText);
        }
        return response.json();
        
    })
}
export function fetchCatByBreed(breedId){
    return axios.get(`/images/search?breed_ids=${breedId}`)
    .then( (response)=>{
        if (!response.ok){
            throw new error(response.statusText);
        }
        return response.json();


})}
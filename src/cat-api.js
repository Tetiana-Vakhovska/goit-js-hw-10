

function fetchBreeds(){

    const BASE_URL =' https://api.thecatapi.com/v1/breeds' ;
    const END_POINT = '/fetchBreeds ';
    const API_KEY = "live_7u1513J1pLH6k4dsxR0sDujpDXqykt0NqVRRGuZsbLcOTa3MmbJ082NYemF7E1jn";
    return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`)
    .then( resp=>{
        if (!resp.ok){
            throw new Error(resp.statusText);
        }
        return resp.json();
        
    })
}
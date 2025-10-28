const locations = document.getElementById("locations");
const cityText = document.getElementById("city-text");
//air quality api
const apiUrl = "https://api.waqi.info/feed/here/?";
const UrlParams = {
    token: "74643b7d1a481896bb55cf83cad3a7bf456628c6"
}
async function fetchData(city){
    try{
        //swap in city name for "here"
        // let updataedUrl = apiUrl.replace("here", city);
        const response = await fetch(apiUrl + new URLSearchParams(UrlParams))
        if(!response.ok){
            throw new Error("response status", response.status)
        }
        const json = await response.json();
        console.log(json)
        //now we have data
        populateUI(json);
    }catch(err){
        console.error(err);
    }
}
function populateUI(data){
    document.getElementById("no2-text").innerHTML = data.data.iaqi.no2.v;
    document.getElementById("o3-text").innerHTML = data.data.iaqi.o3.v;
}
locations.onchange = () =>{
    const currentCity = locations.ariaValueMax;
    fetchData(currentCity);
}
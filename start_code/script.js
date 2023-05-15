// const getCountries = async () => {
//     const response = await fetch("https://restcountries.com/v3.1/all");
//     const data = await response.json();
//     // console.log(data.name);
// }

const countriesContainer = async () => {
    const eachCountry = document.querySelector("ul");

    // getting all data
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    // console.log(data.length);
    
    // getting all the data in a specific format
    data.forEach((url) => {
        // create a li element for each objetc
        const country = document.createElement("li");
        country.innerText = url.name.common + " " + url.flag;
        // add it to the ul
        eachCountry.appendChild(country);
    })

    const formFunction = document.querySelector("button");
    formFunction.addEventListener("click", event => {
        
        document.querySelector("p").innerText = "Awaiting API...";

        // timer
        setTimeout(() => {
        const input = document.querySelector("input").value.toLowerCase();
        eachCountry.innerHTML = " ";
        document.querySelector("p").innerText = " ";


        for(i = 0; i < data.length; i++){
            if(data[i].name.common.toLowerCase().includes(input)){
                const filteredCountries = document.createElement("li");
                filteredCountries.innerText = data[i].name.common + " " + data[i].flag
                eachCountry.appendChild(filteredCountries);
            }
        }}, 1500); 
    })
}

const setUp = async () => await countriesContainer();

window.addEventListener("load", setUp);
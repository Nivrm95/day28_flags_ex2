
const allCards = document.getElementById("all-cards");
let allCountries = [];

const getData = async () => {
  try{
    const response = await axios.get("https://restcountries.com/v3.1/all");   
     return response;
  }catch(error){
    console.log(error);
  }
};

// let nameCountry = document.querySelector("#search-input");
// nameCountry.addEventListener('input',()=>{
//   countryBox(nameCountry.value);


// })

const countryBox = async () => {
  const getDataApi = await getData();
  allCountries = getDataApi.data.map((country) => {
    //open lets
    let countryBox = document.createElement("div");
      let countryName = document.createElement("div");
      let capital = document.createElement("span");
      let population = document.createElement("span");
      let region = document.createElement("span");
      let flagImg = document.createElement("img");
      let regionLine = document.createElement("div");
      let populationLine = document.createElement("div");
      let capitalLine = document.createElement("div");
      let infoBox = document.createElement("div");
      let makeA = (num) => {
         return num.toLocaleString();
       };

    //open class
    countryBox.className = "box-card";
      countryName.className = "country-name";
      infoBox.className = "info-box";
      flagImg.className = "flagImg";
      regionLine.className = "description";
      populationLine.className = "description";
      capitalLine.className = "description";
   

    //open titels
 
    regionLine.innerHTML = "Region:";
    populationLine.innerHTML = "Population:";
    capitalLine.innerHTML = "Capital:";
 
   //take info from api to the divs
    flagImg.src = country.flags.svg;
    region.innerHTML = country.region;
    population.innerHTML = makeA(country.population);
    capital.innerHTML = country.capital;
    countryName.innerHTML = country.name.common;

    //appenChild
    populationLine.appendChild(population);
    regionLine.appendChild(region);
    capitalLine.appendChild(capital);
    infoBox.append(countryName,populationLine,regionLine,capitalLine);
    countryBox.append(flagImg,infoBox);

    //big father
    allCards.appendChild(countryBox);
  });
};

countryBox ();


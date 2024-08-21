//! a.Get all the countries from Asia continent /region using Filter method
const request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true)
request1.send();
request1.onload=function(){
  var data = request1.response;
  var result = JSON.parse(data)
 var res = result.filter((ele)=>ele.region==="Asia")
 var final = res.forEach((ele)=>console.log(ele.name.common));
 console.log(`================================================`);
}


//! b.Get all the countries with a population of less than 2 lakhs using Filter method
const request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function () {
  var data = request2.response;
  var result = JSON.parse(data);
  var res = result.filter((ele) => ele.population < 200000);
  var final = res.forEach((ele)=>console.log(ele.name.common));
  console.log(`===============================================`);
}; 
//! c.Print the following details name, capital, flag, using forEach method
const request3 = new XMLHttpRequest();
request3.open("GET", "https://restcountries.com/v3.1/all", true);
request3.send();
request3.onload = function () {
  var data = request3.response;
  var result = JSON.parse(data);
  result.forEach((country) => {
    console.log(`Name: ${country.name.common}`);
    console.log(`Capital: ${country.capital ? country.capital[0] : "No capital"}`);
    console.log(`Flag: ${country.flags.png}`);
  });
  console.log(`=================================================`);
};

//! d.Print the total population of countries using reduce method
const request4 = new XMLHttpRequest();
request4.open("GET", "https://restcountries.com/v3.1/all", true);
request4.send();
request4.onload = function () {
  var data = request4.response;
  var result = JSON.parse(data);
  var totalPopulation = result.reduce((acc, country) => acc + country.population, 0);
  console.log(`Total Population: ${totalPopulation}`);
  console.log(`===================================================`);
};


//! e.Print the country that uses US dollars as currency.
const request5 = new XMLHttpRequest();
request5.open("GET", "https://restcountries.com/v3.1/all", true);
request5.send();
request5.onload = function () {
  var data = request5.response;
  var result = JSON.parse(data);
  var usdOnlyCountries = result.filter((country) => {
    const currencies = country.currencies;
    return currencies && Object.keys(currencies).length === 1 && currencies.USD;
  });
  usdOnlyCountries.forEach((country) => {
    console.log(`Country: ${country.name.common}`);
  });
  console.log(`==================================================`);
};

















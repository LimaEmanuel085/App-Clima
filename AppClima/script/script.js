const apiKey = "1b5885b10326292493abf71f5d00e926"
const apiUnsplash = "https://source.unsplash.com/1600x900/?";

const cityInput = document.querySelector("#input-idCity");
const city = cityInput.value;
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#idCity");
const tempElement = document.querySelector("#temperatura span");
const descElement = document.querySelector("#description");
const humidityElement = document.querySelector("#umidade span");
const windElement = document.querySelector("#vento span");
const weatherIconElement = document.querySelector("#weather-icon");

var content = document.getElementById("content")
var page = document.getElementById("clima")

//Function

const pegarDadosApi = async(city) => {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiUrl);
    const data = await res.json();


    console.log(data)

    return data;


}

const showClima = async(city) => {

    content.style.height = "60vh"
    content.style.justifyContent = "center"
    content.style.borderRadius = "42px"
    page.style.display = "flex"

    pegarDadosApi(city)
    const data = await pegarDadosApi(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}Km/h`;
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      );
}

//Events

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;


    showClima(city);
});

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {

        const city = e.target.value;

        showClima(city);
    }
})
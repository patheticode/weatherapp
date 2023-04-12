let result = document.getElementById("result")
let searchBtn = document.getElementById("search-btn")
let cityRef = document.getElementById("city")
//funkcja do pobrania danych z api i wyswietleniem ich
let getWeather = () => {
    let cityValue = cityRef.value;
    if (cityValue.length == 0) {
        result.innerHTML = `<h3 class="msg"></h3>`
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&lang=pl&appid=${key}&units=metric`;
        cityRef.value = "";
        fetch(url).then((resp) => resp.json())
            //gdy wartosc city jest bledna
            .then((data) => {
                console.log(data);
                console.log(data.wind.speed)
                result.innerHTML= `
                <h2>${data.name}</h2>
                <h4 class="weather"> ${data.weather[0].description}</h4>
                <img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png" />
                <h1>${data.main.temp} &#176;</h1>
                `;
            })
            .catch(() => {
                result.innerHTML = `<h3 class="msg"> City not found</h3>`
            })

    }
};

searchBtn.addEventListener("click", getWeather)
window.addEventListener("load", getWeather)
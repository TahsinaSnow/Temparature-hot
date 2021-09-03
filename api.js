const API_KEY = `d6228646b50e1c98b9c5e1132da11e0e`;

const searchTemparature = () => {
    const city = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
     .then(response => response.json())
     .then(data => displayTemparature(data));
};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemparature = temparature => {
   setInnerText('city', temparature.name);

   setInnerText('temp', temparature.main.temp);

  setInnerText('clouds',temparature.weather[0].main);

  //sett weather icon
  const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;

  const imgIcon = document.getElementById('weather-icon');

  imgIcon.setAttribute('src', url);

};

const apikey = '4c96567efcb44e3895a152749250708';
const place = "Hemkund Sahib";
const url = `https://api.weatherapi.com/v1/current.json?key=${'4c96567efcb44e3895a152749250708'}&q=${'Hemkund Sahib'}`;
function getweather() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("weatherdisplay").innerHTML = `
          <p>Location: ${data.location.name}</p>
          <p>Temperature: ${data.current.temp_c}°C</p>
          <p>Condition: ${data.current.condition.text}</p>
        `;
      if (data.current.condition.text.toLowerCase().includes("sun")) {
        document.getElementById("weatherpic").style.backgroundImage = "url('sunny-removebg-preview.png')";
      }
      if (data.current.condition.text.toLowerCase().includes("clear")) {
        document.getElementById("weatherpic").style.backgroundImage = "url('sunny-removebg-preview.png')";
      }
      if (data.current.condition.text.toLowerCase().includes("rain")) {
        document.getElementById("weatherpic").style.backgroundImage = "url('rainy-removebg-preview.png')";
      }
      if (data.current.condition.text.toLowerCase().includes("snow")) {
        document.getElementById("weatherpic").style.backgroundImage = "url('snow-removebg-preview.png')";
      }
      if (data.current.condition.text.toLowerCase().includes("cloudls")) {
        document.getElementById("weatherpic").style.backgroundImage = "url('partly_cloudy-removebg-preview.png')";
      }
      if (data.current.condition.text.toLowerCase().includes("mist")) {
        document.getElementById("weatherpic").style.backgroundImage = "url('cloudy-removebg-preview.png')";
      }
      if (data.current.condition.text.toLowerCase().includes("fog")) {
        document.getElementById("weatherpic").style.backgroundImage = "url('partly_sunny-removebg-preview.png')";
      }
      console.log("Weather data:", response);
    })
    .catch(error => console.log("Error:", error));
  document.getElementById("weatherpic").style.opacity = "1";
  document.getElementById("getweather").style.opacity = "0";
}

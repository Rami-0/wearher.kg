// // const key = "18d8c423f6b991ed357f8ef6add1e5d6"
// // let url = `api.openweathermap.org/data/2.5/forecast/daily?lat=42.882004&lon=74.5698&cnt={1}&appid=${key}`
// // const key = "6a8c7e42efb4e25309c2c9f8e6511efc"

// const key = "2cfda1f27f8f18422038c85cc30073ad";

// const $currentTemp = document.querySelector(".temp");
// const $currentDescription = document.querySelector("#descriotion");
// const $currentDescriptionIcon = document.querySelector("#descriotionIcon");
// const $currentMax = document.querySelector("#maxTemp");
// const $currentMin = document.querySelector("#minTemp");
// const $hours = document.querySelector(".hours");

// function Weather() {
//   let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${42.882004}&lon=${74.582748}&lang=ru&units=metric&appid=${key}`;

//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log(data);
//       $currentTemp.textContent = data.current.temp.toFixed(0) + "°";
//       $currentDescription.textContent = data.current.weather[0].description;
//       $currentDescriptionIcon.setAttribute(
//         "src",
//         `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`
//       );
//       $currentMax.textContent =
//         "Макс.: " + data.daily[0].temp.max.toFixed(0) + "°";
//       $currentMin.textContent =
//         "мин.: " + data.daily[0].temp.min.toFixed(0) + "°";

//       data.hourly.forEach((elem, index) => {
//         let hour = new Date().getHours() + index;
//         $hours.insertAdjacentHTML(
//           "beforeend",
//           `
//       <div class="hour">
//         <p>${
//           index == 0
//             ? "сейчас"
//             : hour < 24
//             ? hour
//             : hour < 48
//             ? hour - 24
//             : hour < 72
//             ? hour - 48
//             : hour
//         }</p>
//         <img src="http://openweathermap.org/img/wn/${
//           elem.weather[0].icon
//         }@2x.png"
//         <p>${elem.temp.toFixed(0)}°</p>
//       </div>
//       `
//         );
//       });
//     });
// }

// const rami = document.querySelector("#sh.rami");
// console.log(rami);

// Get the temperature data
const temperatureData = {
  day: 14.91,
  eve: 9.41,
  max: 15.63,
  min: 2.1,
  morn: 6.85,
  night: 7.49,
};

// Calculate the temperature range
const temperatureRange = temperatureData.max - temperatureData.min;

// Calculate the temperature percentage for each time of day
const dayPercentage =
  ((temperatureData.day - temperatureData.min) / temperatureRange) * 100;
const evePercentage =
  ((temperatureData.eve - temperatureData.min) / temperatureRange) * 100;
const maxPercentage =
  ((temperatureData.max - temperatureData.min) / temperatureRange) * 100;
const minPercentage =
  ((temperatureData.min - temperatureData.min) / temperatureRange) * 100;
const mornPercentage =
  ((temperatureData.morn - temperatureData.min) / temperatureRange) * 100;
const nightPercentage =
  ((temperatureData.night - temperatureData.min) / temperatureRange) * 100;

  // maxPercentage
  mornPercentage
  dayPercentage
  evePercentage
  nightPercentage
  // minPercentage
  
// Set the temperature bar gradient
const temperatureBar = document.querySelector(".temperature-bar");
temperatureBar.innerHTML =
  '<div class="temperature-gradient" style="background: linear-gradient(to right, #0000ff + , #00c3ff , #00ff00, #ffff00 , #ff6d1f , #ff0000 + ${da});"></div>';

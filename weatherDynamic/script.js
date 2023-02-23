// const key = "6a8c7e42efb4e25309c2c9f8e6511efc";
const key = "658767b0ae936b022f59a69f44868419"
const $body = document.querySelector(".body");

function Weather(cityname, key, lat, lon) {
  // add to html
  $body.insertAdjacentHTML(
    "beforeend",
    `
    <section class="City">
      <div class="current">
          <h1 id="city" class=${cityname}>${cityname}</h1>
          <h1 class="temp ${cityname}"></h1>
          <p id="descriotion" class=${cityname}> </p>
          <div class="maxmin">
              <p id="maxTemp" class=${cityname}></p>
              <p id="minTemp" class=${cityname}></p>
          </div>
      </div>
      <div class="container">
          <div class="title">
              <img src="" alt="">
              <h5>почасовой прогноз</h5>
          </div>
          <div class="hours ${cityname}">
          </div>
      </div>
      <div class="container">
          <div class="title">
              <img src="" alt="">
              <h5>прогноз на 8 дн</h5>
          </div>
          <div class="daily ${cityname}">
          </div>
        </div>
    </section>
  `
  );
  const $currentTemp = document.querySelector(`.temp.${cityname}`);
  const $currentDescription = document.querySelector(`#descriotion.${cityname}`);
  const $currentDescriptionIcon = document.querySelector(`#descriotionIcon.${cityname}`);
  const $currentMax = document.querySelector(`#maxTemp.${cityname}`);
  const $currentMin = document.querySelector(`#minTemp.${cityname}`);
  const $hours = document.querySelector(`.hours.${cityname}`);
  const $daily = document.querySelector(`.daily.${cityname}`)

  //
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${key}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      if (cityname == "myLoc") {
        document.querySelector(`#city.${cityname}`).textContent = data.timezone;
      }
      console.log(data);
      if (cityname == " ") {
        cityname = data.timezone;
      }
      $currentTemp.innerHTML = ` ${data.current.temp.toFixed(0)}°`;
      $currentDescription.textContent = data.current.weather[0].description;
      $currentMax.textContent =
        "Макс.: " + data.daily[0].temp.max.toFixed(0) + "°";
      $currentMin.textContent =
        "мин.: " + data.daily[0].temp.min.toFixed(0) + "°";

      data.hourly.forEach((elem, index) => {
        let hour = new Date().getHours() + index;
        $hours.insertAdjacentHTML(
          "beforeend",
          `
      <div class="hour">
        <p>${
          index == 0
            ? "сейчас"
            : hour < 24
            ? hour
            : hour < 48
            ? hour - 24
            : hour < 72
            ? hour - 48
            : hour
        }</p>
        <img src="http://openweathermap.org/img/wn/${
          elem.weather[0].icon
        }@2x.png"
        <p>${elem.temp.toFixed(0)}°</p>
      </div>
      `
        );
      });
      data.daily.forEach((elem,index)=>{
        $daily.insertAdjacentHTML(
          "beforeend",
          `
      <div class="day">
        <p>${index}</p>
        <img src="http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png">
        <p>${elem.temp.max.toFixed(0)}°</p>
        <p>${elem.temp.min.toFixed(0)}°</p>
      </div>
      `
        );

      })
    });
}




function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
async function myFunction() {
  try {
    const pos = await getCurrentPosition();
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const myLoc = new Weather("myLoc", key, latitude, longitude);
    // console.log(pos.coords.latitude, pos.coords.longitude);
  } catch (error) {
    console.log(error);
  }
}
myFunction().then(() => {
  const Bishkek = new Weather("Бишкек", key, 42.882004, 74.582748);
  const Osh = new Weather("Oш", key, 40.513996, 72.816101);
  const Naryn = new Weather("Нарын", key, 41.42866, 75.99111);
  const Tokmok = new Weather("Tокмок", key, 42.84194, 75.30149);
  const JalalAbad = new Weather("Жалал-Абад", key, 40.933155, 72.981491);
  const Batken = new Weather("Баткен", key, 40.34532, 69.859741);
});

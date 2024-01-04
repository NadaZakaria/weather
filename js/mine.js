async function getWeather(a){
  let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1aea33985fd84a7ebb7164231240201&q=${a}&days=3`)
  if (t != null) {
    let a = await t.json();
    displauCurrent(a.location, a.current),
    displayAnother(a.forecast.forecastday)
   
 }
}
getWeather("paris")

document.getElementById("search").addEventListener("input", a=>{
  getWeather(a.target.value)
}
);

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function displauCurrent(a,t){
  if(t != null){
    var e = new Date(t.last_updated.replace(" ", "T"));
    let n =
    `
    <div class="col-md-4 p-0 ps-4">
      <div class="d-flex justify-content-between ps-2 pt-2">
        <p class="day">${days[e.getDay()]}</p>
        <p class="data">${e.getDate() + monthNames[e.getMonth()]}</p>
      </div>
      <h3 class="city mt-5">${a.name}</h3>
      <h1 class="degree fs-1">${t.temp_c}<img src="https:${t.condition.icon}" alt="" /></h1>
      <small class="text-info">${t.condition.text}</small>
      <div class="foot d-flex gap-5 pt-5">
        <p class="percentage"> <img src="./1.png" alt=""  width="30">20%</p>
        <p class="fast"><img src="./2.png" alt="" width="30">18km/h</p>
        <p class="direction"><img src="./3.png" alt="" width="30">East</p>
      </div>
      </div>`
  document.getElementById("forecast").innerHTML = n
  }
  
}

function displayAnother(a) {
  let t = "";
  for (let e = 1; e < a.length; e++)
      t += `      
      <div class="col-md-4 z-3 text-center p-0 pt-2">
      <div class=" d-flex justify-content-center">
        <p class="day">${days[new Date(a[e].date.replace(" ", "T")).getDay()]}</p>
      </div>
      <img src="https:${a[e].day.condition.icon}" alt="" class="pt-5">
      <p class="degree2 fw-bold">${a[e].day.maxtemp_c}</p>
      <small class="text-muted d-block pb-3">${a[e].day.mintemp_c}</small>
      <small class="text-info ">${a[e].day.condition.text}</small>
    </div>
`
  document.getElementById("forecast").innerHTML += t
}
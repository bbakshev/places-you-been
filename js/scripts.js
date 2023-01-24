// Business Logic
function Destination(landmark, timeOfTheYear, thingsToDo, importantNote) {
  this.landmark = landmark;
  this.timeOfTheYear = timeOfTheYear;
  this.thingsToDo = thingsToDo;
  this.importantNote = importantNote;
}

let paris = new Destination("Paris, France", "Spring 2018", "Eiffel Tower, Louvre Museum", "The best time to visit Paris is from June to August and September to October. Both summer and fall have its ups and downs. From June to August the weather in Paris is just about parfait (perfect). Average highs are in the high 70s and there are long days of sunshine. Unfortunately, summer is also the most crowded time and the most expensive. For lower travel rates and significantly shorter lines at attractions, plan a visit in the fall.");

let london = new Destination("London, England", "Summer 2019", "Tower of London, British Museum", "The best time to visit London is March through May when the temperatures are mild and the city's parks are green and blooming. However, late spring along with summer is also prime tourist season, and hotel and flight prices reflect the surge. You're more likely to find airfare and accommodation deals in the fall and winter though you'll also encounter chilly temperatures. December in London is also an incredibly popular place to be during the holidays, so expect the streets to be crowded with both English and international tourists.");

let phuket = new Destination("Phuket, Thailand", "Winter 2021", "Promthep Cape, Big Buddha", "The best time to visit Phuket is between November and April when weather conditions are ideal for beach activities, such as swimming and boating. The six months between May and October are monsoon season, and although accommodation prices are much lower this time of year, the water conditions can be dangerous. ");

// UI Logc
window.addEventListener("load", function () {
  document.querySelector("#london-btn").addEventListener("click", function () {
    document.querySelector(".landmark").innerHTML = london.landmark;
    document.querySelector(".time-of").innerHTML = london.timeOfTheYear;
    document.querySelector(".things-to-do").innerHTML = london.thingsToDo;
    document.querySelector(".notes").innerHTML = london.importantNote;
  });

  document.querySelector("#phuket-btn").addEventListener("click", function () {
    document.querySelector(".landmark").innerHTML = phuket.landmark;
    document.querySelector(".time-of").innerHTML = phuket.timeOfTheYear;
    document.querySelector(".things-to-do").innerHTML = phuket.thingsToDo;
    document.querySelector(".notes").innerHTML = phuket.importantNote;
  });

  document.querySelector("#paris-btn").addEventListener("click", function () {
    document.querySelector(".landmark").innerHTML = paris.landmark;
    document.querySelector(".time-of").innerHTML = paris.timeOfTheYear;
    document.querySelector(".things-to-do").innerHTML = paris.thingsToDo;
    document.querySelector(".notes").innerHTML = paris.importantNote
  });

});
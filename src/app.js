/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(whoaleatorio, whatleatorio, whenaleatorio) {
  //write your code here
  const excuse = document.querySelector("#excuse");
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var whoaleatorio = who[Math.floor(Math.random() * who.length)];
  console.log(whoaleatorio);

  var whatleatorio = what[Math.floor(Math.random() * what.length)];
  console.log(whatleatorio);

  var whenaleatorio = when[Math.floor(Math.random() * when.length)];
  console.log(whenaleatorio);

  excuse.innerHTML = `Sory, but ${whoaleatorio} ${whatleatorio} my homework ${whenaleatorio}`;
};

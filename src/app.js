/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generate() {
    let who = ["the dog", "my granma", "his turtle", "my bird"];
    let what = ["eat", "pissed", "crushed", "broked"];
    let when = [
      "before the class",
      "right in time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let excuse =
      who[Math.floor(Math.random() * who.length)] +
      " " +
      what[Math.floor(Math.random() * what.length)] +
      " " +
      when[Math.floor(Math.random() * when.length)];
    return excuse;
  }
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generate();
  });

  console.log("Hello Rigo from the console!");
};

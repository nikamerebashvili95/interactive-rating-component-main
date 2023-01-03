const btn = document.getElementById("btn");
const ratings = document.querySelectorAll(".circle");
const completed = document.querySelector(".thank");
const container = document.querySelector(".container");
const span = document.getElementById("rating");

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", () => {
    let rating = ratings[i].innerHTML;
    for (let i = 0; i < ratings.length; i++) {
      ratings[i].classList.contains("selected");
      ratings[i].classList.remove("selected");
    }
    ratings[i].classList.add("selected");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      completed.classList.remove("hidden");
      container.classList.add("hidden");
      span.innerHTML = rating;
    });
  });
}

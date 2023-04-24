const rating = document.querySelector("#rating-state");
const stars = document.querySelectorAll(".star");
const btn = document.querySelector(".btn");
const thanks = document.querySelector("#thank-you");
const choice = document.querySelector("#choice");

let selectedRating = "";

stars.forEach((star) => {
  star.addEventListener("click", (e) => {
    selectedRating = e.target;
    removeActive();
    e.target.classList.add("active");
  });
});

function removeActive() {
  stars.forEach((star) => {
    if (star !== selectedRating) {
      star.classList.remove("active");
    }
  });
}

btn.onclick = function () {
  rating.style.display = "none";
  thanks.style.display = "flex";
  choice.textContent = selectedRating.textContent;
};

const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item");

dark.addEventListener("click", () => {
  sidebar.className = "sidebar";
  activeListItem.className = "list-item";
});

night.addEventListener("click", () => {
  sidebar.className = "sidebar night";
  activeListItem.className = "list-item night";
});

light.addEventListener("click", () => {
  sidebar.className = "sidebar light";
  activeListItem.className = "list-item light";
});

// const arrows = document.querySelectorAll(".arrow");
// const movieLists = document.querySelectorAll(".movie-list");

// arrows.forEach((arrow, i) => {
//   const itemNumber = movieLists[i].querySelectorAll("img").length;
//   let clickCounter = 0;
//   arrow.addEventListener("click", () => {
//     const ratio = Math.floor(window.innerWidth / 270);
//     clickCounter++;
//     if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
//       movieLists[i].style.transform = `translateX(${
//         movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
//       }px)`;
//     } else {
//       movieLists[i].style.transform = "translateX(0)";
//       clickCounter = 0;
//     }
//   });
//   console.log(clickCounter);
//   console.log(Math.floor(window.innerWidth / 270));
// });

// const colors = document.querySelectorAll(".color-box");
// const sidebar = document.querySelector(".sidebar");
// const activeListItem = document.querySelector(".list-item.active");

// colors.forEach((color) => {
//   color.addEventListener("click", () => {
//     if (color.classList.contains("dark")) {
//       sidebar.style.backgroundColor = "#111827";
//       activeListItem.style.backgroundColor = "#374151";
//     } else if (color.classList.contains("night")) {
//       sidebar.style.backgroundColor = "#312e81";
//       activeListItem.style.backgroundColor = "#4338ca";
//     } else {
//       sidebar.style.backgroundColor = "#f3f4f6";
//       activeListItem.style.backgroundColor = "#d1d5db";
//     }
//   });
// });

// classList.add remove

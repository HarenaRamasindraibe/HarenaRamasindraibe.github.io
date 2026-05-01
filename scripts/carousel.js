const track = document.querySelector(".carousel-track");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const dotsContainer = document.querySelector(".carousel-dots");

let currentIndex = 0;
const total = track.children.length;

// Création des points
const dots = Array.from({ length: total }, (_, i) => {
  const d = document.createElement("span");
  d.className = "dot" + (i === 0 ? " active" : "");
  d.addEventListener("click", () => goTo(i));
  dotsContainer.appendChild(d);
  return d;
});

function goTo(index) {
  currentIndex = (index + total) % total;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle("active", i === currentIndex));
}

leftBtn.addEventListener("click", () => goTo(currentIndex - 1));
rightBtn.addEventListener("click", () => goTo(currentIndex + 1));

// Swipe tactile
let startX = 0;
track.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), {
  passive: true,
});
track.addEventListener("touchend", (e) => {
  const diff = startX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) goTo(currentIndex + (diff > 0 ? 1 : -1));
});

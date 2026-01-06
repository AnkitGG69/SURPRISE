const tapText = document.getElementById("tapText");
const message = document.getElementById("message");
const hint = document.getElementById("hint");
const cake = document.getElementById("cake");
const balloons = document.getElementById("balloons");
const endText = document.getElementById("endText");
const music = document.getElementById("birthday-music");

setTimeout(() => {
  tapText.style.opacity = "1";
  tapText.style.transform = "translateY(0)";
}, 1000);

tapText.addEventListener("click", () => {
  tapText.style.display = "none";

  message.style.display = "block";
  message.classList.add("fade-in");


setTimeout(() => {
  hint.style.display = "block";
  hint.classList.add("fade-in");
},3000);
});

hint.addEventListener("click", () => {
  message.style.display = "none";
  hint.style.display = "none";

  cake.style.display = "block";
  cake.classList.add("fade-in");

  document.getElementById("cakeHint").style.display = "block";
});

cake.addEventListener("click", () => {
  music.play();
  cake.style.transform = "scale(1.2)";
  balloons.style.display = "block";
  balloons.classList.add("balloon-fly");
  document.getElementById("cakeHint").style.display = "none";	
  setTimeout(() => {
    endText.style.display = "block";
    endText.classList.add("fade-in");
},2000);
});
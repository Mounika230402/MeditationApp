const relaxerContainer = document.getElementById("relaxer-container");
const text = document.getElementById("relax-text");

// deep-breathing
const btnStart = document.querySelector(".startBreathe");
const pointerContainer = document.querySelector(".pointer-container");
const pointer = document.querySelector(".pointer");
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
  text.innerText = "Breathe In!";
  relaxerContainer.className = "relaxer-container grow";

  clear = setTimeout(() => {
    text.innerText = "Hold";

    clearone = setTimeout(() => {
      text.innerText = "Breathe Out!";
      relaxerContainer.className = "relaxer-container shrink";
    }, holdTime);
  }, breatheTime);

  setInterval(breathAnimation, totalTime);
}

btnStart.addEventListener("click", () => {
  breathAnimation();
  btnStart.style.opacity = "0";
  pointerContainer.style.animationPlayState = "running";
  pointer.style.animationPlayState = "running";
});


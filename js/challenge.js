let counting = document.getElementById("counter");
let paused = false;
setInterval(() => {
  if (!paused) {
    counting.innerHTML++;
  }
}, 1000);
let togglePaused = () => (paused = !paused);

let remove = document.getElementById("minus");
remove.addEventListener("click", () => {
  counting.innerHTML--;
});
let adding = document.getElementById("plus");
adding.addEventListener("click", () => {
  counting.innerHTML++;
});

const like = document.getElementById("heart");
let likes = 0;
like.addEventListener("click", (event) => {
  let createLikeList = document.querySelector(".likes");
  let likeList = document.createElement("li");
  likeList.textContent = `${counting.innerHTML} has ${likes} likes`;
  createLikeList.appendChild(likeList);
});
const pause = document.getElementById("pause");
pause.addEventListener("click", () => {
  if (pause.innerText === "pause") {
    like.disabled = true;
    adding.disabled = true;
    remove.disabled = true;
    togglePaused();
    pause.innerText = "resume";
  } else if (pause.innerText === "resume") {
    like.disabled = false;
    adding.disabled = false;
    remove.disabled = false;
    togglePaused();
    pause.innerText = "pause";
  }
});

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  pushMessage();
  form.reset();
});
const pushMessage = () => {
  let input = document.getElementById("comment-input").value;
  let comment = document.getElementById("list");
  let innerComment = document.createElement("li");
  innerComment.innerText = input;
  comment.appendChild(innerComment);
};

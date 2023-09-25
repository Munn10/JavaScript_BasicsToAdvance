const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");
// console.log(body);

buttons.forEach((btn) => {
  //   console.log(btn);
  btn.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "#000";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "#fff";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
      body.style.color = "red";
    }
  });
});

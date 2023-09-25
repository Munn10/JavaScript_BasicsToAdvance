// document.body.appendChild(div);

// const body = document.querySelector("body");
const body = document.getElementsByTagName("body");
// console.log(body);

const createDiv = () => {
  const div = document.createElement("div");
  console.log(div);
  div.className = "main";
  div.id = Math.round(Math.random() * 10 + 1);
  div.setAttribute("title", "Heading");
  div.style.backgroundColor = "red";
  div.style.padding = "12px";
  const text = document.createTextNode("Welcome to ultimate JS course");
  div.appendChild(text);
};

createDiv();
body.appendChild(createDiv());

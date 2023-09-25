const clock = document.getElementById("clock");
// console.log(clock);

// console.log(time.toLocaleTimeString());
setInterval(() => {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

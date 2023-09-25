const form = document.querySelector("form");
// console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid Weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`;
    if (BMI >= 24.9) {
      results.innerHTML = `You are obbesed! ${BMI}`;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      results.innerHTML = `You are Normal.......${BMI}`;
    } else {
      results.innerHTML = `You are Under weight.......Eat something ${BMI}`;
    }
  }
});

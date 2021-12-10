let price = document.querySelector("#price");
let month = document.querySelector("#month");
let percent = document.querySelector("#percent");
let calculate = document.querySelector("#calculate");
let clear = document.querySelector("#clear");
let append = document.querySelector("#append");

document.addEventListener("keyup", function (e) {
  {
    if (e.keyCode == 13) {
      Calculate();
    }
  }
});

calculate.addEventListener("click", function () {
  Calculate();
});

function Calculate() {
  if (price.value === "" || month.value === "" || percent.value == "") {
    alert("can't add empty number");
    return;
  }
  let date = new Date();
  let now = date.toLocaleDateString("en-US");
  let day = date.getDate();
  let month2 = date.getMonth() + 1;
  let year = date.getFullYear();

  let h3 = document.createElement("h3");
  h3.style.marginTop = "7px";
  let price1 = parseInt(price.value);
  let month1 = parseInt(month.value);
  let percent1 = parseInt(percent.value);

  let ed = (price1 * percent1) / 100;
  price1 += ed * month1;
  let reminder = price1 % month1;
  let conc = price1 / month1;
  let floor = Math.floor(conc);

  for (let i = 0; i < month1; i++) {
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let span = document.createElement("span");

    div.className = "col-md-3";
    div.className = "styled-div";
    h4.classList.add("money");

    if (reminder == 0) {
      h4.innerHTML = `${conc} manat`;
    } else {
      h4.innerHTML = `${floor} manat`;
      if (i == month1 - 1) {
        h4.innerHTML = `${floor + reminder} manat`;
      }
    }

    let time = `${day}.${month2 + i}.${year}`;
    if (month2 + i == 12) {
      month2 = 0;
      year++;
    }
    if (day == 32) {
      day = 1;
      month2++;
    }
    span.innerHTML = time;

    h3.innerHTML = `Toplam: ${price1} manat`;
    span.classList.add("span");
    div.appendChild(h4);
    div.appendChild(span);
    append.appendChild(div);
    price.value = "";
    month.value = "";
    percent.value = "";
  }
  append.appendChild(h3);
}

clear.addEventListener("click", function () {
  append.innerHTML = "";
});

document.addEventListener("keyup", function (e) {
  {
    if (e.keyCode == 8) {
      append.innerHTML = "";
    }
  }
});

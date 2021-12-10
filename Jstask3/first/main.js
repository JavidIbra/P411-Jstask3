let home = document.querySelector(".tab-home");
let about = document.querySelector(".tab-about");
let service = document.querySelector(".tab-service");
let contact = document.querySelector(".tab-contact");
let homediv = document.querySelector("#home-div");
let aboutdiv = document.querySelector("#about-div");
let servicediv = document.querySelector("#service-div");
let contactdiv = document.querySelector("#contact-div");
let list = document.querySelectorAll(".list > li");
let dvlist = document.querySelectorAll(".dvlist");

home.addEventListener("click", function () {
  openTab(homediv, home);
});

about.addEventListener("click", function () {
  openTab(aboutdiv, about);
});
service.addEventListener("click", function () {
  openTab(servicediv, service);
});
contact.addEventListener("click", function () {
  openTab(contactdiv, contact);
});

function openTab(dv, tab) {
  for (let i = 0; i < dvlist.length; i++) {
    if (dvlist[i].classList.contains("active")) {
      dvlist[i].classList.remove("active");
      dvlist[i].classList.add("passive");
    }
  }
  dv.classList.add("active");
  dv.classList.remove("passive");

  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains("li-active")) {
      list[i].classList.remove("li-active");
    }
  }
  tab.classList.add("li-active");
}
home.click();
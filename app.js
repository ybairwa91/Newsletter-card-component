"use strict";

const btn = document.getElementById("btn");

const myfunction = function () {
  let inputEmail = document.getElementById("input").value;

  if (inputEmail === "") {
    alert("please input the email");
  } else if (inputEmail.includes("@") && inputEmail.includes(".com")) {
    alert(`Thank you for subscription`);
  } else {
    alert("Wrong email address");
  }
};
btn.addEventListener("click", myfunction);

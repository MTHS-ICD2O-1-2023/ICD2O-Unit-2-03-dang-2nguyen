// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
function enterClicked() {
  // input
  const firstName = parseInt(document.getElementById("number").value)
  const userAge = document.getElementById("name").value

  // output
  document.getElementById("user-info").innerHTML =
    "Your address is: " + firstName + " " + userAge + "."
}
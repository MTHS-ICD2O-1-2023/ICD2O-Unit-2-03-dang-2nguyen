// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: Mar 2024
// This file contains the JS functions for index.html
function enterClicked() {
  // input
  const firstName = parseInt(document.getElementById("number").value)
  const userAge = document.getElementById("name").value

  // output
  document.getElementById("user-info").innerHTML =
    "Your address is: " + firstName + " " + userAge + "."
}
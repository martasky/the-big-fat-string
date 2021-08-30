"use strict";
document.querySelector("#generate").addEventListener("click", generateOutput);

function generateOutput() {
  const input = document.querySelector("#inputbox").value;

  const dropdown = document.querySelector("#operator").value;
  const output = document.querySelector("#outputbox");
  let newOutput = "";
  let indexfirst = input.indexOf(" ");
  let indexlast = input.lastIndexOf(" ");

  if (dropdown === "0") {
    output.textContent =
      input.substring(0, 1).toUpperCase() + input.substring(1).toLowerCase();
  } else if (dropdown === "1") {
    output.textContent = `The first name is ${input.substring(0, indexfirst)}`;
  } else if (dropdown === "2") {
    output.textContent = input.substring(0, indexfirst).length;
  } else if (dropdown === "3") {
    output.textContent = `The middle name ${input.substring(
      indexfirst + 1,
      indexlast
    )} starts at ${indexfirst + 1} and ends at ${indexlast}`;
  } else if (dropdown === "4") {
    if (input.endsWith(".jpg") === true) {
      output.textContent = "it is .jpg file";
    } else {
      output.textContent = "it is .png file";
    }
  } else if (dropdown === "5") {
    output.textContent = input.replaceAll(input, "*").repeat(input.length);
  } else if (dropdown === "6") {
    output.textContent =
      input.substring(0, 2).toLowerCase() +
      input[2].toUpperCase() +
      input.substring(3).toLowerCase();
  } else {
    let len = input.length;
    let i = 1;
    console.log(input);
    console.log(len);
    let temp = input[0];
    for (i = 1; i < len; i++) {
      if (input[i - 1] == " " || input[i - 1] == "-") {
        temp += input[i].toUpperCase();
      } else {
        temp += input[i].toLowerCase();
      }
      console.log(temp);
    }
    output.textContent = temp;
  }
}

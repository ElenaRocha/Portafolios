"use strict";

const formu = document.querySelector(".formularioOk");
const dniBueno = document.querySelector(".valido");
const dniMalo = document.querySelector(".noValido");

function validation() {
  const input = document.querySelector("#dniCompleto").value;
  let match = input.search(/^\d{8}-?\w$/i);

  if (match !== -1) {
    formu.style.display = "none";
    dniBueno.style.display = "flex";
  } else {
    formu.style.display = "none";
    dniMalo.style.display = "flex";
  }
}

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

function calculando() {
  let digitos = document.querySelector("#dniSinLetra").value;

  let resto = digitos % 23;
  let myLetra = letras[resto];
  document.querySelector("#letra").innerHTML = myLetra;
}

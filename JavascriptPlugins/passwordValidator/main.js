"use strict"

function cambiarColor(color){

    const nivelBajo = document.getElementById("bajo");
    const nivelMedio = document.getElementById("medio");
    const nivelALto = document.getElementById("alto");
    
    if( color === "white"){
        nivelBajo.style.backgroundColor = color;
        nivelMedio.style.backgroundColor = "white";
        nivelALto.style.backgroundColor = "white";
    }

    if(color === "red"){
        nivelBajo.style.backgroundColor = color;
        nivelMedio.style.backgroundColor = "white";
        nivelALto.style.backgroundColor = "white";
    };

    if(color === "yellow"){
        nivelBajo.style.backgroundColor = color;
        nivelMedio.style.backgroundColor = color;
        nivelALto.style.backgroundColor = "white";
    };

    if(color === "green"){
        nivelBajo.style.backgroundColor = color;
        nivelMedio.style.backgroundColor = color;
        nivelALto.style.backgroundColor = color;
    };
};

function nivelar(){

    const pass = document.querySelector(".password").value;

    const letras = /[a-z]+/.test(pass);
    const numeros = /[0-9]+/.test(pass);
    const mayusculas = /[A-Z]+/.test(pass);
    const longitud = pass.length;

    if(((letras || numeros) && longitud < 8)){
        cambiarColor("red");
    }
    if((letras && numeros) && (longitud <= 15 && longitud > 8)){
        cambiarColor("yellow");
    }
    if( (letras && numeros && mayusculas) && longitud > 15){
        cambiarColor("green");
    }
    if(longitud <= 0){
        cambiarColor("white");
    };
};
function sumar() {
    console.log("Aplicacion calculadora. Suma");
    const formu = document.getElementById("formulario");

    let opA = formu["operandoA"];
    let opB = formu["operandoB"];

    let resultado = parseInt(opA.value) + parseInt(opB.value); // Value para llegar al valor del formulario

    if (isNaN(resultado)) {
        document.getElementById("resultado").innerHTML =
            "Datos introducidos no son numericos";
    } else {
        document.getElementById(
            "resultado"
        ).innerHTML = `El resultado es: ${resultado}`;
    }
}

function restar() {
    console.log("Aplicacion calculadora. Resta");
    const formu = document.getElementById("formulario");

    let opA = formu["operandoA"];
    let opB = formu["operandoB"];

    let resultado = parseInt(opA.value) - parseInt(opB.value); // Value para llegar al valor del formulario

    if (isNaN(resultado)) {
        document.getElementById("resultado").innerHTML =
            "Datos introducidos no son numericos";
    } else {
        document.getElementById(
            "resultado"
        ).innerHTML = `El resultado es: ${resultado}`;
    }
}

function multiplicar() {
    console.log("Aplicacion calculadora. Multiplicar");
    const formu = document.getElementById("formulario");

    let opA = formu["operandoA"];
    let opB = formu["operandoB"];

    let resultado = parseInt(opA.value) * parseInt(opB.value); // Value para llegar al valor del formulario

    if (isNaN(resultado)) {
        document.getElementById("resultado").innerHTML =
            "Datos introducidos no son numericos";
    } else {
        document.getElementById(
            "resultado"
        ).innerHTML = `El resultado es: ${resultado}`;
    }
}

function dividir() {
    console.log("Aplicacion calculadora. Dividir");
    const formu = document.getElementById("formulario");

    let opA = formu["operandoA"];
    let opB = formu["operandoB"];

    let resultado = parseInt(opA.value) / parseInt(opB.value); // Value para llegar al valor del formulario

    if (isNaN(resultado)) {
        document.getElementById("resultado").innerHTML =
            "Datos introducidos no son numericos";
    } else {
        document.getElementById(
            "resultado"
        ).innerHTML = `El resultado es: ${resultado}`;
    }
}
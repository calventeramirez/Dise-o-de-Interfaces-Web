function sumar(){
    console.log("Aplicación calculador. Suma");
    const formu = document.getElementById('formulario');

    let opA = formu['operandoA'];
    let opB = formu['operandoB'];

    let resultado = parseInt(opA.value) + parseInt(opB.value);

    if (isNaN(resultado)){
        document.getElementById('resultado').innerHTML = "Datos introducidos no son numéricos";
    } else {
        document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}.`;
    }
}

function restar(){
    console.log("Aplicación calculador. Resta");
    const formu = document.getElementById('formulario');

    let opA = formu['operandoA'];
    let opB = formu['operandoB'];

    let resultado = Number(opA.value) - Number(opB.value);

    if (isNaN(resultado)){
        document.getElementById('resultado').innerHTML = "Datos introducidos no son numéricos";
    } else {
        document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}.`;
    }
}

function multiplicar(){
    console.log("Aplicación calculador. Multiplicar");
    const formu = document.getElementById('formulario');

    let opA = formu['operandoA'];
    let opB = formu['operandoB'];

    let resultado = Number(opA.value) * Number(opB.value);

    if (isNaN(resultado)){
        document.getElementById('resultado').innerHTML = "Datos introducidos no son numéricos";
    } else {
        document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}.`;
    }
}

function dividir(){
    console.log("Aplicación calculador. Dividir");
    const formu = document.getElementById('formulario');

    let opA = formu['operandoA'];
    let opB = formu['operandoB'];

    let resultado = Number(opA.value) / Number(opB.value);

    if (isNaN(resultado)){
        document.getElementById('resultado').innerHTML = "Datos introducidos no son numéricos";
    } else {
        document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}.`;
    }
}
var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var paciente = document.querySelector('#primeiro-paciente');

var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector('.info-imc');

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 400) {
    pesoEhValido = false;
    console.log('Peso Inválido!');
    tdImc.textContent = 'Peso Inválido';
}

if (altura <= 0 || altura >= 3.00) {
    alturaEhValida = false;
    console.log('Altura inválida!');
    tdImc.textContent = 'Altura inválida';
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}



// console.log(imc);

// console.log(paciente);
// console.log(tdPeso);
// console.log(peso);

// console.log(tdAltura)
// console.log(altura);
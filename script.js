document.addEventListener('DOMContentLoaded', function () {
  var calculateButton = document.getElementById('calculateButton');

  calculateButton.addEventListener('click', function () {
    calculateIMC();
  });
});

function calculateIMC() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value) / 100;

  var imc = weight / (height * height);

  var classification = "";
  var obesity = "";

  if (imc < 18.5) {
    classification = "Abaixo do peso.";
    obesity = "Grau de obesidade: Magreza.";
  } else if (imc >= 18.5 && imc < 25) {
    classification = "Peso normal.";
    obesity = "Grau de obesidade: Saudável.";
  } else if (imc >= 25 && imc < 30) {
    classification = "Sobrepeso.";
    obesity = "Grau de obesidade: Sobrepeso.";
  } else if (imc >= 30 && imc < 35) {
    classification = "Obesidade grau 1.";
    obesity = "Grau de obesidade: Obesidade.";
  } else if (imc >= 35 && imc < 40) {
    classification = "Obesidade grau 2.";
    obesity = "Grau de obesidade: Obesidade severa.";
  } else {
    classification = "Obesidade grau 3.";
    obesity = "Grau de obesidade: Obesidade mórbida.";
  }

  document.getElementById('imc').innerHTML = imc.toFixed(2);
  document.getElementById('classification').innerHTML = classification;
  document.getElementById('obesity').innerHTML = obesity;

  var resultDiv = document.getElementById('result');
  resultDiv.style.display = "block";
}
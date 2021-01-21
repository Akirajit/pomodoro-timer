let segundos = 0;
let minutos = 25;
let mostrarSegundos = "00";
let mostrarMinutos = 25;
let intervalo = null;
let estado = "detenido";
let manejado = document.getElementById("manejado");

function cronometro() {
  if (minutos == 0 && segundos == 0) {
    window.clearInterval(intervalo);
    document.getElementById("cronometro").innerHTML =
      mostrarMinutos + ":" + mostrarSegundos;
    document.getElementById("comenzar").disabled = true;
    manejado.innerHTML =
      "Ha terminado el ciclo Pomodoro. Presione reiniciar para volver a comenzar.";
  } else if (minutos >= 0) {
    document.getElementById("cronometro").innerHTML =
      mostrarMinutos + ":" + mostrarSegundos;
    segundos--;

    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }

    if (segundos < 10) {
      mostrarSegundos = "0" + segundos;
    } else {
      mostrarSegundos = segundos;
    }
    if (minutos < 10) {
      mostrarMinutos = "0" + minutos;
    } else {
      mostrarMinutos = minutos;
    }
  }
}

function comenzar() {
  if (estado === "detenido") {
    intervalo = window.setInterval(cronometro, 1000);
    document.getElementById("comenzar").innerHTML = "Detener";
    estado = "comenzado";
    manejado.innerHTML = "El pomodoro timer se ha iniciado";
  } else {
    window.clearInterval(intervalo);
    document.getElementById("comenzar").innerHTML = "Comenzar";
    estado = "detenido";
    manejado.innerHTML = "El pomodoro timer se ha detenido";
  }
}

function resetear() {
  if (document.getElementById("comenzar").disabled == true) {
    document.getElementById("comenzar").disabled = false;
  }
  window.clearInterval(intervalo);
  segundos = 0;
  minutos = 25;
  mostrarSegundos = "00";
  mostrarMinutos = 25;
  document.getElementById("cronometro").innerHTML =
    mostrarMinutos + ":" + mostrarSegundos;
  document.getElementById("comenzar").innerHTML = "Comenzar";
  estado = "detenido";
  manejado.innerHTML = "";
}

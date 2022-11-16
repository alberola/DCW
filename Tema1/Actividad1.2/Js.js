const saludar = () => {
  alert("Bienvenidos al restaurante El Americano.");
};
const cambiarTexto = () => {
  let variable = prompt("¿Cuantas personas van a comer?", );
  if (variable <= 0 || variable >= 10 || isNaN(variable) == true ) {
    alert("No disponemos de las mesas que desea, Lo Sentimos.");
  } else {
    document.getElementById("papas").innerHTML = variable * 500 + " gr de papas.";
    document.getElementById("queso").innerHTML = variable * 250 + " gr de queso.";
    document.getElementById("pollo").innerHTML = variable * 200 + " gr de pollo / carne mechada.";
    
    //Condicional ternario para cambiar 
    (variable<3)? document.getElementById("salchichas").innerHTML = "1 paquete de salchichas.":document.getElementById("salchichas").innerHTML = "2 paquete de salchichas.";
  }
};
const pasarKg = () => {
  let variable = prompt("¿Cuantas personas van a comer?", );
  document.getElementById("papas").innerHTML = variable * 500 / 1000 + " kg de papas.";
  document.getElementById("queso").innerHTML = variable * 250 / 1000  + " kg de queso.";
  document.getElementById("pollo").innerHTML = variable * 200 / 1000 + " kg de pollo / carne mechada.";

  (variable<3)? document.getElementById("salchichas").innerHTML = "1 paquete de salchichas.":document.getElementById("salchichas").innerHTML = "2 paquete de salchichas.";

};

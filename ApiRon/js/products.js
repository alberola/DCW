//Guardamos en una variable el div donde queremos introducir las cartas
var respuesta = document.querySelector('#respuesta');

//Var for the shop cart
var cart = [];
var objeto;
//Funcion para obtener el idDrink (valor del mismo)
function imprimirId(idDrink){
    console.log(idDrink.id);
    cart.push(idDrink.id);
    console.log(cart);
    document.querySelector('.elementosCanvas').innerHTML += "<li class='list-group-item'>"+ idDrink.id + "</li>";
}

    //Hacemos un llamamiento a la api y en caso de que entren los datos elegimos lo que deseamos mostrar
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
    .then( res => res.json())
    .then( data => {
        console.log(data);
        if(data == undefined){
            respuesta.innerHTML = "<div class='alert alert-danger' role='alert'> LLena todos los campos</div>";
        } else {  
            console.log("Entran datos correctamente");
            data.drinks.forEach(element => {
                respuesta.innerHTML += 
                "<div class='col my-4'>"+
                    "<div class='card' style='width: 18rem;' id="+element.idDrink+">"+
                        "<img src="+element.strDrinkThumb+" class='card-img-top' alt='...'>"+
                        "<div class='card-body'>"+
                            "<h5 id="+element.strDrink+" class='card-title m-b5'>"+element.strDrink+"</h5>"+
                            "<a href='#' class='btn btn-dark boton' id="+element.idDrink+" data-bs-toggle='offcanvas' data-bs-target='#offcanvasWithBothOptions' aria-controls='offcanvasWithBothOptions' onclick=imprimirId(this)>Añadir al Carrito</a>"+
                        "</div>"+
                    "</div>"+
                "</div>"; 
            });
        }
    })
//Event Listener to clear the offCanvas cart
document.querySelector('#clearCanvas').addEventListener("click", function clearCanvas() {
    document.querySelector('.elementosCanvas').innerHTML = "";
    cart = [];
})







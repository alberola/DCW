
//We save the var where we want to print the card
var respuesta = document.querySelector('#respuesta');

//Var for the shop cart
var cart = [];
var objeto;

//Event Listener to clear the offCanvas cart
document.querySelector('#clearCanvas').addEventListener("click", function clearCanvas() {
    document.querySelector('.elementosCanvas').innerHTML = "";
    cart = [];
})

//Function to obtain idDrink (his value)
function obtainId(idDrink){
    // if () {

    // }
    cart.push(idDrink.id);
    document.querySelector('.elementosCanvas').innerHTML += "<div class='my-1 d-flex justify-content-between'><li class='list-group-item rounded w-100' id='elemento"+idDrink.id+"'>"+ document.getElementById('nombre'+idDrink.id).innerText + "</li><button class='btn btn-danger mx-2 p-2' value="+idDrink.id+" onclick='deleteElementCanvas(this)'>-</button></div>";
}
    //We call the api and if the data is correct we type the values

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
                            "<h5 id=nombre"+element.idDrink+" class='card-title m-b5'>"+element.strDrink+"</h5>"+
                            "<a href='#' class='btn btn-dark boton' id="+element.idDrink+" data-bs-toggle='offcanvas' data-bs-target='#offcanvasWithBothOptions' aria-controls='offcanvasWithBothOptions' onclick=obtainId(this)>Añadir al Carrito</a>"+
                        "</div>"+
                    "</div>"+
                "</div>"; 
            });
            
        }
    })


//Function to delete Elements already in canvas
function deleteElementCanvas (elementCanvas){
    //We pass the element to delete first from the cart array
    deleteFromCart(elementCanvas);
    //We remove the element from the html with the id
    document.getElementById("elemento"+elementCanvas.value).remove();
    //At the end we remove the element as well
    elementCanvas.remove();

}
//Function to delete Elements already in cart
function deleteFromCart (elementCart) {
    //We select the index of the element we want to delete and we do it
    cart.splice(cart.indexOf(elementCart.value), 1);
}




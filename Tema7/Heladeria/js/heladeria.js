//Var for the ice cream creation
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

//Auto-increment bar width
var progressVar = document.querySelector('.progress-bar');
setTimeout(() => {
    progressVar.style.width = '25%';
}, 1000);
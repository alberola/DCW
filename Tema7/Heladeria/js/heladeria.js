//Var for the ice cream creation
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

//Auto-increment bar width
var progressVar = document.querySelector('.progress-bar');
//Var for imgs
var selector = document.querySelectorAll('img');

selector.forEach(element => {
    element.addEventListener('click', function () { getValues(this)})
});

//Function to obtain value selected
function getValues (element) {
    console.log(element.id);
    let content = document.querySelector('.fruits');
    content.classList.add('change');
    content.style.display = 'none';

}


//TIMEOUTS ANIMATIONS
setTimeout(() => {
    progressVar.style.width = '25%';
}, 1000);
//We remove the entrance animation and then we put the rotation animation
setTimeout(() => {
    selector.forEach(element => {
        element.classList.remove('bounce-in-top');
        element.classList.add('rotation');
    });
}, 1500);
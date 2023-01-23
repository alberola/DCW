//We select the first button to execute 
document.querySelector('#execute').addEventListener('click', function () {
    const valueUnderTen = new Promise(function (resolve, reject) {
        //We define the random value interval
         randomNumber = Math.floor(Math.random() *11);
         if (randomNumber >= 5) {
             resolve("Estás aprobado") //If you pass the exam
         } else {
             reject("Estás suspendido") //If you don´t pass the exam
         }
     });
    console.log(valueUnderTen);
    valueUnderTen
        .then((resolveMSG) => {alert(resolveMSG);}) 
        .catch((err) => {alert(err);})
});

//We select the second button to execute
document.getElementById("age").addEventListener('click', () => {
    porteroDiscoteca(document.getElementById("inputAge").value)
        .then((msg) => {console.log(msg);})
        .catch((error) => {console.log(error);});
});

//Function with the promise
function porteroDiscoteca (insertedAge) {
    // const insertedAge = document.querySelector('#inputAge').value;
    return new Promise((resolve, reject) => {
        if (!isNaN(insertedAge)) {
            if (insertedAge >= 18) {
                resolve("Puede Pasar tronco! ");
            } else {
                reject('No puedes pasar tronco!');
            }
        } else {
            throw new Error ('¡Tronco! ¡Tronco! ¡Me estás cabreando!');
        }
    });
}


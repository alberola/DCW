//VARS
var tableMain = document.querySelector('#tableMain');
var auxData = [];
//Calling the api and creating the Main Table
fetch('https://services.arcgis.com/hkQNLKNeDVYBjvFE/arcgis/rest/services/Alojamientos_turisticos/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&outSR=4326&f=json')
  .then(response => response.json())
  .then(data => data.features.forEach(element => {
        auxData.push(element);
        createTableRow(element.attributes,tableMain);
        })
    );
//Function to create table ROWS
function createTableRow(data,parent) {
    //Elements of each row
    const createTr = document.createElement('tr');
    const createTdName = document.createElement('td');
    const createTdType = document.createElement('td');
    const createTdCategory = document.createElement('td');
    const createTdMuni = document.createElement('td');
    //Settings attributes to the table
    createTr.className = 'giveInfo';
    createTr.setAttribute('data-bs-toggle', 'modal');
    createTr.setAttribute('data-bs-target', '#exampleModal');
    createTr.id = data.ID;
    createTr.setAttribute('onclick', 'modalDates(this)');
    createTdName.innerText = data.NOMBRE;
    createTdType.innerText = data.TIPO;
    createTdCategory.innerText = data.Est_LLav;
    createTdMuni.innerText = data.MUNICIPIO;
    //Inserting the row
    parent.appendChild(createTr);
    createTr.appendChild(createTdName);
    createTr.appendChild(createTdType);
    createTr.appendChild(createTdCategory);
    createTr.appendChild(createTdMuni);
}

//Adding the event listener to Municipio search
document.querySelector('#muni').addEventListener('click', function () {
    let text = document.querySelector('#muniInput');
    console.log(text.value);
    let rows = tableMain.getElementsByTagName("tr");
    const auxRows = rows.values();
    console.log(auxRows);
    /*
    SIMPLEMENTE COMPROBAR QUE EL VALOR DE LA TABLA EN LA POSICION TD 3 (MUNICIPIO)
    ES IGUAL A LA QUE METEMOS EN EL CAMPO DEL INPUT PASANDO A LOWER CASE TODO, 
    PERO POR UN ERROR NO PUEDO EXTRAER EL DATO DE LAS FILAS YA QUE ME LO DA EN UNA COLECCION Y NO EN ARRAY
    */

});
//Adding the event listener to Category search
document.querySelector('#category').addEventListener('click', function () {
    let text = document.querySelector('#categoryInput');
    console.log(text.value);
    /*
    SERIA IGUAL QUE EN EL CASO ANTEROR SIMPLEMENTE COMPROBAR QUE EL VALOR DE LA TABLA EN LA POSICION TD 2 (CATEGORÍA)
    ES IGUAL A LA QUE METEMOS EN EL CAMPO DEL INPUT, PERO POR UN ERROR NO PUEDO EXTRAER EL DATO DE LAS FILAS YA QUE ME LO DA
    EN UNA COLECCION Y NO EN ARRAY
    */
});

//Function to update modal dates
function modalDates (dates) {
    let id = (dates.id)-1;
    console.log(auxData[dates.id]);
    //Vars to update modal
    let modalTitle = document.querySelector('#modalTitle');
    let modalType = document.querySelector('#modalType');
    let modalCategory = document.querySelector('#modalCategory');
    let modalMuni = document.querySelector('#modalMuni');
    let modalDirec = document.querySelector('#modalDirec');
    let modalPhone = document.querySelector('#modalPhone');
    let modalNum = document.querySelector('#modalNum');
    //Inserting the text into the modal
    modalTitle.innerHTML = auxData[id].attributes.NOMBRE;
    modalType.innerHTML = auxData[id].attributes.TIPO;
    modalCategory.innerHTML = auxData[id].attributes.Est_LLav;
    modalMuni.innerHTML = auxData[id].attributes.MUNICIPIO;
    modalDirec.innerHTML = auxData[id].attributes.DIRECCION;
    modalPhone.innerHTML = auxData[id].attributes.TELEFONO;
    modalNum.innerHTML = auxData[id].attributes.PLAZAS;
}


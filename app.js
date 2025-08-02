//Juego del amigo secretro.

let amigos = []; //Array en donde se almacenan los nombres de los amigos ingresados.
let resultado = document.getElementById("resultado"); //Elemento HTML donde se muestra el resuldado del sorteo.

//Función para agregar amigos a la lista.

function agregarAmigo() {

    let nombreAmigo = document.getElementById("amigo"); //Esta variable capturar el valor del campo de entrada.
    let nombre = nombreAmigo.value.toUpperCase(); //Con el método toUpperCase() convierte el nombre a mayúsculas para evitar duplicados.
    
    //Validamos que el campo de entrada no este vacío y evitamos que se repitan nombres.

    if (nombre === "") {
        alert("Por favor, ingrese un nombre");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("El nombre que ingresaste ya está en la lista. Por favor, ingresa un nombre diferente.");
        return;
    }
    //Agrega el nombre al array de amigos.
    amigos.push(nombre);
    //Limpia el campo de entrada.
    nombreAmigo.value = "";
    //Limpia el nombre anterior.
    resultado.innerHTML = "";
    //Regresa al campo de entrada luego de agregar un nombre.
    nombreAmigo.focus();
    //Muestra la lista actualizada de amigos.
    mostrarAmigos();

}

//Función para mostrar la lista de amigos en pantalla.

function mostrarAmigos() {

    let listaDeAmigos = document.getElementById("listaAmigos"); //Elemento de la lista donde se mostrarán los amigos.
    listaDeAmigos.innerHTML = ""; //Limpia la lista para evitar duplicados.

    //Hacemos un bucle que recorre cada elemento del array.

    for (let nombre of amigos) {
        
      let listaDeElementos = document.createElement("li"); //Crea un nuevo elemento HTML.
      listaDeElementos.textContent = nombre; //Le asigna a la lista de items que creamos el texto que contiene la variable nombre.
      listaDeAmigos.appendChild(listaDeElementos) //Agrega la lista de items dentro de un contenedor en el HTML.
    
    }

}

//Función para elejir un nombre de forma aleatoria.

function sortearAmigo() {

    //Si el array amigos esta vacio se muestra una alerta.
    
    if (amigos.length === 0) {

        alert("No hay nombres para sortear.");

        return; //Corta la función y no la deja continuar.
    }

    let indiceAleatorio = Math.floor(Math.random()* amigos.length); //Esta variable genera un número aleatorio, lo multiplica por la cantidad de amigos y lo redondea para evitar decimales.
    let nombreAleatorio = amigos[indiceAleatorio]; //Esta variable accede al nombre del array con el índice aleatorio generado.

    //Este document se encarga de mostrar el nombre sorteado en pantalla.

    document.getElementById("resultado").innerHTML = `<p>¡EL AMIGO SORTEADO ES...!</p><h1>${nombreAleatorio}</h1>`;

    //Limpia el array después del sorteo y actualiza la lista visualmente.

    amigos = [];
    mostrarAmigos();
}
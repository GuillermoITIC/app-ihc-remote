// Función para obtener datos de la API Mock
function obtenerUltimaOrden() {
    return fetch('https://66176ba4ed6b8fa434829b58.mockapi.io/ingresos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Convertir el JSON a un array
        const array = Object.values(data);
        console.log(array);

        // Obtener el último elemento de los datos recibidos
        const ultimaOrden = array[array.length - 1]; 
        // Retornar el texto de la última orden
        return ultimaOrden.texto;
    });
}

// Función para actualizar el texto de la última orden en la página
function actualizarUltimaOrden() {
    obtenerUltimaOrden().then(texto => {
        // Actualizar el texto de la última orden en el span correspondiente
        document.getElementById("lastOrderText").innerText = texto;
    });
}

// Llamar a la función para actualizar la última orden al cargar la página
actualizarUltimaOrden();

// Establecer un intervalo para actualizar la última orden cada 2 segundos
setInterval(actualizarUltimaOrden, 2000);

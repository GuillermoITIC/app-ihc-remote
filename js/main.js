$(document).ready(function(){
    // Función para obtener y mostrar los últimos 3 registros de MockAPI
    function obtenerUltimosRegistros() {
        $.getJSON('https://66176ba4ed6b8fa434829b58.mockapi.io/ingresos', function(data){
            // Limpiar el contenido anterior de la lista desordenada
            $('#ultimaOrdenLista').empty();
            // Obtener los últimos 5 registros y agregarlos al HTML
            for (var i = data.length - 5; i < data.length; i++) {
                var order = data[i];
                $('#ultimaOrdenLista').append('<li>' + order.accion + ' - ' + order.fecha + '</li>');
            }
        });
    }

    // Llamar a la función para obtener los últimos 3 registros cada 2 segundos
    setInterval(obtenerUltimosRegistros, 2000);
});

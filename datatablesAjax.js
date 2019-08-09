            var table = $('#idTabla').DataTable({
                "ajax": {
                    "url": 'api/getCustomers',
                    "type": "POST",
                    "datatype": "json",
			//Si el llamado al API necesita parametros
                    "data": {
                        "CLAVE_CLI": clave_cliente,
                        "EMPRESA": empresa_cliente
                    },
                    dataSrc: "data"
                },
               
                processing:true,
		//Definir Columnas a pintar, deberían coincidir con los th que definamos en el html
                "columns": [
                    { "data": "CLAVE_ART", "name": "Clave" },
                    { "data": "CODIGOP", "name": "Codigo" },
                    { "data": "DESCRIP", "name": "Descripcion" },
                    { "data": "Precio", "name": "Precio" },
		//Agregar en la ultima columna un boton | url | texto | etc
                    {
                        "data": null,
                        "defaultContent": "<a href='#'><i class='fa fa-2x fa-cart-plus'></i></a>"
                    }

                ],

                lengthChange: false,
                "language": {
                    "search":"Buscar:",
                    "zeroRecords": "No hay datos que mostrar",
                    "info": "Página _PAGE_ de _PAGES_",
                    "infoEmpty": "Sin resultados",
                    "infoFiltered": "(filtrado de _MAX_ registros)",
                    "processing": "'<div> <i class='fa  fa-spin fa-spinner'></i> Cargando articulos...</div>"
                }
            });

	//Agregar al elemento de la ultima columna el evento click para ejecutar una acción "data" contiene el objeto de la fila
            $('#idTabla tbody').on('click', 'a', function () {
                var data = table.row($(this).parents('tr')).data();
                app.ConfirmarPartida(data);
            });
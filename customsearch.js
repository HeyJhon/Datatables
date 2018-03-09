$(document).ready(function() 
{
   $('#tableX').DataTable();
   
   //Ocultar Busqueda por default
   $('#tableX_filter').hide(); 
   
   //Asignar a input personalizado la busqueda
   $("#txtBuscar").on('keyup',function () 
   {
      $('#tableX')
      .DataTable()
      .search($('#txtBuscar').val(), false, true)
      .draw();
    }); 

});



var indexColumna = -1;
var contador = 0;

function BusquedaByColumn(columna) {

    if (contador == 0) {

        $("#txtBuscar").off();

        $("#txtBuscar").val("");

        $('#tableX')
          .DataTable()
          .search('')
          .columns()
          .search('')
          .draw();

        $("#txtBuscar").attr("placeholder", "Busqueda por " + columna.innerHTML);

        $("#txtBuscar").on('keyup', function () {

            if ($('#txtBuscar').val() == "") {
                $('#tableX')
               .DataTable()
               .columns(columna.cellIndex)
               .search("", false, true)
               .draw();
            }
            else {
                $('#tableX')
                .DataTable()
                .columns(columna.cellIndex)
                .search($('#txtBuscar').val(), false, true)
                .draw();
            }

        });

        contador = 1;
        indexColumna = columna.cellIndex;
    }

    else if (contador == 1 && indexColumna == columna.cellIndex) {

        $("#txtBuscar").off();

        $("#txtBuscar").val("");

        $('#tableX').DataTable()
          .search('')
          .columns()
          .search('')
          .draw();

        $("#txtBuscar").attr("placeholder", "Busqueda General");

    
        $("#txtBuscar").on('keyup', function () {          

            $('#tableX')
                .DataTable()
                .search($('#txtBuscar').val(), false, true)
                .draw();
        });

        contador = 0;
    }
    else {

        $("#txtBuscar").off();

        $("#txtBuscar").val("");

        $('#tableX')
          .DataTable()
          .search('')
          .columns()
          .search('')
          .draw();

        $("#txtBuscar").attr("placeholder", "Busqueda por " + columna.innerHTML);

        $("#txtBuscar").on('keyup', function () {

            if ($('#txtBuscar').val() == "") {
                $('#tableX')
               .DataTable()
               .columns(columna.cellIndex)
               .search("", false, true)
               .draw();
            }
            else {
                $('#tableX')
                .DataTable()
                .columns(columna.cellIndex)
                .search($('#txtBuscar').val(), false, true)
                .draw();
            }

        });

        contador = 1;
        indexColumna = columna.cellIndex;
    }

}
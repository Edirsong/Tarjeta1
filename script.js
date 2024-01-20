$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validando Nombre
        if($('#names').val() == ''){
            errores += '<p>Escriba sus nombres</p>';
            $('#names').css("border-bottom-color", "#F14B4B");
        } else {
            $('#names').css("border-bottom-color", "#d1d1d1");
        }
      
      
        if($('#Apellidos').val() == ''){
            errores += '<p>Escriba los apellidos</p>';
            $('#Apellidos').css("border-bottom-color", "#F14B4B");
        } else {
            $('#Apellidos').css("border-bottom-color", "#d1d1d1");
        }
      
      

        // Validando Teléfono
        if($('#phone').val() == ''){
            errores += '<p>Escriba un teléfono</p>';
            $('#phone').css("border-bottom-color", "#F14B4B");
        } else {
            $('#phone').css("border-bottom-color", "#d1d1d1");
        }

        // Validando Correo Electrónico
        if($('#email').val() == ''){
            errores += '<p>Ingrese un correo electrónico</p>';
            $('#email').css("border-bottom-color", "#F14B4B");
        } else {
            $('#email').css("border-bottom-color", "#d1d1d1");
        }

        // Validando Mensaje
        if($('#mensaje').val() == ''){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B");
        } else {
            $('#mensaje').css("border-bottom-color", "#d1d1d1");
        }

        // Enviando Mensaje
        if(errores == ''){
            var formData = {
                'names': $('#names').val(),
                'Apellidos': $('#Apellidos').val(),
                'phone': $('#phone').val(),
                'email': $('#email').val(),
                'mensaje': $('#mensaje').val()
            };

            $.ajax({
                url: 'https://script.google.com/macros/s/AKfycbxGDbp3aLtGq2Kc76vyZveKGBDehfLYkYAzyq7-cFZP9kRrsl7m4h1wI_W5qLpJx7A/exec', // Reemplaza con la URL de tu script de Google Apps
                type: 'POST',
                data: formData,
                success: function(response) {
                    console.log(response);
                    // Acciones tras el envío exitoso, por ejemplo, mostrar un mensaje
                    alert("Mensaje enviado con éxito.");
                },
                error: function(response) {
                    console.error('Error:', response);
                    // Acciones en caso de error, por ejemplo, mostrar un mensaje de error
                    alert("Hubo un error al enviar el mensaje.");
                }
            });
        } else {
            // Mostrando errores en el formulario
            var mensajeModal = '<div class="modal_wrap">' +
                                    '<div class="mensaje_modal">' +
                                        '<h3>Errores encontrados</h3>' +
                                        errores +
                                        '<span id="btnClose">Cerrar</span>' +
                                    '</div>' +
                                '</div>'

            $('body').append(mensajeModal);
        }

        // Cerrando Modal
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});

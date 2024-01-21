$(document).ready(function(){
    $('.form_contact').submit(function(event){
        event.preventDefault(); // Prevenir el envío tradicional del formulario

        if (this.checkValidity() === true) {
            var formData = {
                'names': $('#names').val(),
                'Apellidos': $('#Apellidos').val(),
                'phone': $('#phone').val(),
                'email': $('#email').val(),
                'mensaje': $('#mensaje').val()
            };

            // Deshabilitar el botón de envío
            $('#btnSend').attr('disabled', true).text('Enviando...');

            // Llamada AJAX para enviar los datos del formulario
            $.ajax({
                url: 'https://script.google.com/macros/s/AKfycbxGDbp3aLtGq2Kc76vyZveKGBDehfLYkYAzyq7-cFZP9kRrsl7m4h1wI_W5qLpJx7A/exec',
                type: 'POST',
                data: formData,
                success: function(response) {
                    alert("Mensaje enviado con éxito.");
                    // Limpiar el formulario
                    $('.form_contact')[0].reset();
                    // Habilitar el botón y restablecer su texto
                    $('#btnSend').attr('disabled', false).text('Enviar Mensaje');
                },
                error: function(response) {
                    alert("Hubo un error al enviar el mensaje.");
                    // Habilitar el botón y restablecer su texto
                    $('#btnSend').attr('disabled', false).text('Enviar Mensaje');
                }
            });
        }
    });
});

$(document).ready(function(){
    $('.form_contact').submit(function(event){
        event.preventDefault(); // Previene el envío tradicional del formulario

        var $btnSend = $('#btnSend');
        $btnSend.prop('disabled', true).text('Enviando...'); // Deshabilita el botón y cambia el texto

        if (this.checkValidity() === true) {
            var formData = {
                'names': $('#names').val(),
                'Apellidos': $('#Apellidos').val(),
                'phone': $('#phone').val(),
                'email': $('#email').val(),
                'mensaje': $('#mensaje').val()
            };

            $.ajax({
                url: 'https://script.google.com/macros/s/AKfycbxGDbp3aLtGq2Kc76vyZveKGBDehfLYkYAzyq7-cFZP9kRrsl7m4h1wI_W5qLpJx7A/exec',
                type: 'POST',
                data: formData,
                success: function(response) {
                    alert("Mensaje enviado con éxito.");
                    $('.form_contact')[0].reset(); // Limpia el formulario
                    $btnSend.prop('disabled', false).text('Enviar Mensaje'); // Habilita el botón y restablece el texto
                },
                error: function(response) {
                    alert("Hubo un error al enviar el mensaje.");
                    $btnSend.prop('disabled', false).text('Enviar Mensaje'); // Habilita el botón y restablece el texto
                }
            });
        } else {
            // Si el formulario no es válido, habilitamos de nuevo el botón
            $btnSend.prop('disabled', false).text('Enviar Mensaje');
        }
    });
});

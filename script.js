$(document).ready(function(){
    $('.form_contact').submit(function(event){
        event.preventDefault(); // Prevenir el envío tradicional del formulario

        // Verificar si el formulario es válido
        if (this.checkValidity() === true) {
            var formData = {
                'names': $('#names').val(),
                'Apellidos': $('#Apellidos').val(),
                'phone': $('#phone').val(),
                'email': $('#email').val(),
                'mensaje': $('#mensaje').val()
            };

            // Llamada AJAX para enviar los datos del formulario
            $.ajax({
                url: 'https://script.google.com/macros/s/AKfycbxGDbp3aLtGq2Kc76vyZveKGBDehfLYkYAzyq7-cFZP9kRrsl7m4h1wI_W5qLpJx7A/exec',
                type: 'POST',
                data: formData,
                success: function(response) {
                    alert("Mensaje enviado con éxito.");
                },
                error: function(response) {
                    alert("Hubo un error al enviar el mensaje.");
                }
            });
        } else {
            // El navegador se encarga de mostrar los mensajes de error de validación
            console.log("Hay errores en el formulario.");
        }
    });
});

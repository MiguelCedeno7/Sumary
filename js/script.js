
(function(){
    emailjs.init("z1b6aRVyvkW5e0nhA"); // Reemplaza "TU_USER_ID" con tu User ID de EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = this;

    emailjs.sendForm('service_as8koud', 'template_5xxtt3k', this)
        .then(function() {
            alert('Mensaje enviado con éxito!');
            form.reset();
            console.log('Formulario reseteado');
        }, function(error) {
            alert('Hubo un problema al enviar el mensaje: ' + JSON.stringify(error));
        });
});
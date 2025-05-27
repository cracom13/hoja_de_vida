document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, inicializando EmailJS...');
    
    try {
        emailjs.init('DA_G-zOiHraKza4Jt');
        console.log('EmailJS inicializado correctamente');
    } catch (error) {
        console.error('Error al inicializar EmailJS:', error);
        return;
    }

    const contactForm = document.getElementById('contact-form-emailjs');
    if (contactForm) {
        console.log('Formulario encontrado');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Submit prevenido, ejecutando handleFormSubmit');
            handleFormSubmit(e).catch(error => {
                console.error('Error no manejado:', error);
            });
        });
    } else {
        console.error('No se encontró el formulario con ID "contact-form-emailjs"');
    }
});

async function handleFormSubmit(e) {
    const form = e.target;
    console.log('Iniciando handleFormSubmit');

    const submitBtn = form.querySelector('#submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    if (!submitBtn) {
        console.error('Botón de submit no encontrado');
        return;
    }

    // Deshabilitar botón y mostrar loading
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';

    try {
        console.log('Validando formulario...');
        
        // Obtener valores de los campos (incluyendo el teléfono)
        const name = form.querySelector('[name="from_name"]').value.trim();
        const email = form.querySelector('[name="from_email"]').value.trim();
        const phone = form.querySelector('[name="phone"]').value.trim(); // Nuevo campo
        const message = form.querySelector('[name="message"]').value.trim();
        
        // Validación básica (solo campos requeridos)
        if (!name || !email || !message) {
            throw new Error('Por favor completa todos los campos requeridos');
        }

        console.log('Obteniendo IP...');
        let userIP = 'No disponible';
        try {
            const ipResponse = await fetch('https://api.ipify.org?format=json');
            if (ipResponse.ok) {
                const ipData = await ipResponse.json();
                userIP = ipData.ip;
            }
        } catch (ipError) {
            console.warn('No se pudo obtener la IP:', ipError);
        }

        console.log('Preparando envío...');
        const templateParams = {
            from_name: name,
            from_email: email,
            mobile: phone || 'No proporcionado', // Envía el teléfono o un mensaje por defecto
            message: message,
            date: new Date().toLocaleString('es-CO'),
            ip: userIP,
            year: new Date().getFullYear()
        };

        console.log('Enviando a EmailJS...');
        const response = await emailjs.send(
            "service_6ixobnz", 
            "template_ncsq0qn", 
            templateParams
        );
        console.log('EmailJS respondió:', response);

        // Mostrar mensaje de éxito
        showMessage('¡Mensaje enviado con éxito! Te contactaré pronto.', 'success');
        form.reset();

    } catch (error) {
        console.error('Error en el envío:', error);
        showMessage(`Error: ${error.message}`, 'error');
    } finally {
        // Restaurar botón
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        console.log('Proceso de envío finalizado');
    }
}

function showMessage(text, type) {
    const messagesDiv = document.getElementById('form-messages');
    if (!messagesDiv) {
        console.error('No se encontró el contenedor de mensajes');
        return;
    }

    messagesDiv.textContent = text;
    messagesDiv.style.display = 'block';
    messagesDiv.style.padding = '10px';
    messagesDiv.style.margin = '10px 0';
    messagesDiv.style.borderRadius = '4px';

    if (type === 'success') {
        messagesDiv.style.backgroundColor = '#d4edda';
        messagesDiv.style.color = '#155724';
        messagesDiv.style.border = '1px solid #c3e6cb';
    } else {
        messagesDiv.style.backgroundColor = '#f8d7da';
        messagesDiv.style.color = '#721c24';
        messagesDiv.style.border = '1px solid #f5c6cb';
    }

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        messagesDiv.style.display = 'none';
    }, 5000);
}
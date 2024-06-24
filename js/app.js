document.addEventListener('DOMContentLoaded', function() { //se espera a que cargue todo el documento
    
    const email = {
        email: '',
        asunto: '',
        mensaje: '' 
    }


    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const inputCc = document.querySelector('#cc')
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');  


    //Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    inputCc.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    //callback
    btnReset.addEventListener('click', function(e) {
        e.preventDefault();
        resetFormulario();
    });

    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();

            //Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');

            alertaExito.textContent = 'Mensaje enviado correctamente'

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        }, 2000)
    }

    function validar(e) {
        if(e.target.value.trim() === '' && e.target.name !== 'cc') {
            mostrarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        } 

        if((e.target.id === 'email' || e.target.id === 'cc') && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement)
            email[e.target.name] = '';
            comprobarEmail();
            return;
        };


        limpiarAlerta(e.target.parentElement);

        //Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
        
        //Comprobar el objeto de email
        comprobarEmail();

        console.log(email);
    }

    function mostrarAlerta(mensaje, referencia) {

        limpiarAlerta(referencia);

        //Generar 'alerta' en HTML 
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        //Inyectar 'error' a formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        //'expresion regular' para email en JS
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email)
        return resultado;
    }

    function comprobarEmail() {
        delete email.cc;
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true;
            return;
        } 
        
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        //reiciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        email.cc = '';

        delete email.cc;
        
        formulario.reset();
        comprobarEmail();

        
    }
    
});
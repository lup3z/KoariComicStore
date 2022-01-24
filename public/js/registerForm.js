window.addEventListener("load", function () {

    
    let form = document.querySelector('form') 

    // VALIDACION CAMPO NOMBRE 
    let errorsFirstName = ''
    let firstName = document.querySelector('input.nombre')
    let divFirstName = document.querySelector('#errors-first-name')
    let backFirstName = document.querySelector('#validation1');

    firstName.addEventListener('blur', function () {        
        if (backFirstName) {
            backFirstName.style.display = "none";
            }
        if (firstName.value == '') {
            firstName.classList.add('input-danger')
            errorsFirstName = 'Debes ingresar un nombre'
        } else if (firstName.value.length < 2) {
            firstName.classList.add('input-danger')
            errorsFirstName = 'El nombre debe tener al menos dos caracteres'
        } else {
            firstName.classList.remove('input-danger')
            errorsFirstName = ''
        }

        if (errorsFirstName.length > 0) {
            divFirstName.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsFirstName
        } else {
            divFirstName.innerHTML = ""
        }
    })

    form.addEventListener('submit', function(e) {
        if (errorsFirstName != '' ) {
            e.preventDefault()
        }
    })

})
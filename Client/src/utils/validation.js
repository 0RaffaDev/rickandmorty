export default function validation(input) {
    const errors = {};
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp("[0-9]");

    //*Email
    if(!input.email.length) errors.email= 'Ingrese su email';
    else{
        if(!regexEmail.test(input.email)) errors.email = 'El usuario ingresado no es valido.'
        if(input.email.length > 35 ) errors.email = 'Su usuario tiene mas de 35 caracteres!.'
    }

    //*Password
    if(!input.password.length)errors.password= 'Ingrese su contraseña'
    else{
        if(!regexPassword.test(input.password)) errors.password = 'Su contraseña debe tener al menos un numero.' 
        if(input.password.length < 6) errors.password = 'Debe tener al menos 6 caracteres.'
        if(input.password.length > 10) errors.password = 'No debe tener mas de 10 caracteres.'
    }
    return errors;

  

 
}

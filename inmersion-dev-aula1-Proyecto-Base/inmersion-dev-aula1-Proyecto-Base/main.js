let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena')
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
const passwordDebil = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;


function generar(){

    let numeroDigitado = parseInt (cantidad.value);
       
    if( numeroDigitado < 8){
        alert("cantidad incorrecta");
    }
    
    let password = " ";

    for(let i=0; i < numeroDigitado; i++ ){

        let caracterAleatorio = cadenaCaracteres [Math.floor( Math.random() * cadenaCaracteres.length)];
      

        password+=caracterAleatorio;
        console.log (caracterAleatorio);
        
        }
        contraseña.value = password;
        console.log (password);

        }
        
        
        
  

function validar(){


    if(passwordDebil.test(contraseña.value)) {
        alert("contraseña fuerte"); 
    } else {
        alert("contraseña debil");
    }
}


function limpiar(){

    contraseña.value = "";
    cantidad.value = "";
}





window.addEventListener('load', ()=> { /* al cargar el documento */

    /* dos contastes para guardar los elementos */
    const display = document.querySelector('.calculadora-display') /* forma de llamr el documento ,osea display */
    const keypadButtons = document.getElementsByClassName('keypad-button'); /* todos los botones*/

    /* creamos otra constante para convertir el HTMLcollection a array */ 
    const keypadButtonsArray = Array.from(keypadButtons); /* es una lista para llamar todos los elementos similares . los botones*/
    keypadButtonsArray.forEach( (button) => { /* mover los elementos */

        /* a cada boton le agregamos un listener */
        button.addEventListener('click', ()=> {
            calculadora(button, display)
        })  
    }) 
});

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'c':
            borrar(display)
            break; 

        case '=':
            calcular(display);
            break;
        
        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) /* eval para poder evaluar la operación*/
}

function actualizar(display, button){
    if(display.innerHTML == 0) {
        display.innerHTML = '';
    }
display.innerHTML += button.innerHTML;
    /* display.innerHTML = display.innerHTML + button.innerHTML */
    /*calcular*/
}

function borrar(display) {
    display.innerHTML = 0
}
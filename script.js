// Botones ==========================================
const btnYura = document.getElementById('btnYura');
const btnIngresar = document.getElementById('ingresar');
const btnRegistrarme = document.getElementById('registrarme');

// Boton para ingresar a App
const btnguardarDatos = document.getElementById('guardar-datos');
const ingresarBtnIngresar =document.getElementById('ingresar-btnIngresar');

// Elementos del DOM ================================
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const registrarmeForm= document.getElementById('registrarme-form');
const ingresarForm = document.getElementById('ingresar-form');
const main = document.getElementById('main');

btnYura.addEventListener('click', ()=>{
    container1.classList.add("hide");
    container1.classList.remove("show");
    container1.classList.remove("container1");
    container2.classList.add("hide");
    container2.classList.replace("hide","show");
})

btnRegistrarme.addEventListener('click',()=>{
    container1.classList.add("hide");
    container2.classList.add("hide");
    btnIngresar.classList.add("hide");
    registrarmeForm.classList.replace("hide","show");
})

btnIngresar.addEventListener('click',()=>{
    container1.classList.add("hide");
    container2.classList.add("hide");
    btnIngresar.classList.add("hide");
    registrarmeForm.classList.replace("show","hide");
    ingresarForm.classList.replace('hide','show');
})

// Para ver el contenido principal
ingresarBtnIngresar.addEventListener('click',()=>{
    container1.classList.add("hide");
    container2.classList.add("hide");
    btnIngresar.classList.add("hide");
    ingresarForm.classList.replace('show','hide');
    registrarmeForm.classList.replace("show","hide");
    main.classList.replace('hide','show');
})

// Para ver el contenido principal
btnguardarDatos.addEventListener('click',()=>{
    container1.classList.add("hide");
    container2.classList.add("hide");
    btnIngresar.classList.add("hide");
    ingresarForm.classList.replace('show','hide');
    registrarmeForm.classList.replace("show","hide");
    main.classList.replace('hide','show');
})



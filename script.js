const btnYura = document.getElementById('btnYura');
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');


btnYura.addEventListener('click', ()=>{
    container1.classList.add("hide");
    container1.classList.remove("show");
    container1.classList.remove("container1");
    container2.classList.add("hide");
    // container2.classList.remove("container1");



    console.log("img hide");
    
    container2.classList.replace("hide","show");
    console.log("algo");
    
})

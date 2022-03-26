const button = document.getElementById("list");
const btnbackground = document.getElementById("btnbackground");

btnbackground.style.display = "none";

button.addEventListener("click" , ()=>{
    if(btnbackground.style.display == "none"){
        btnbackground.style.display = "block"
    }

    else{
        btnbackground.style.display = "none"
    }
})


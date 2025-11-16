var lamp = document.getElementById("lamp")
var ligada=false

lamp.addEventListener("click", function(){
    if(ligada==false){
        lamp.src = "./assets/lamp_on.png"
        document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)"
        ligada=true
    }else{
        lamp.src = "./assets/lamp_off.png"
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)"
        ligada=false
    }

    
})





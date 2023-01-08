console.log("Bienvenido al Cronómetro ⌚")


let minutos = 0
console.log("Minutos:" , minutos);

let segundos = 0
console.log("Segundos:" , segundos);

let milesimas = 0
console.log("Milésimas:" , milesimas);


function play(){
    let btn_play = document.getElementById("btn_play");

    btn_play.addEventListener("click" , function(e){

            if(btn_play.textContent == "►"){

                btn_play.innerHTML = "||"
                
                function sumar_milesimas(){
                    milesimas = milesimas + 1;
                    let h2_milesimas = document.getElementById("milesimas")

                    h2_milesimas.innerText = milesimas
                    console.log("Milésimas:" , milesimas)

                    if(milesimas == 10){
                        milesimas = 0; 
                    }
                    
                }

                let intervalo_milesimas = setInterval(sumar_milesimas , 100);
                intervalo_milesimas;
        
                function sumar_segundos(){
                    segundos = segundos + 1;
                    console.log("Segundos:" , segundos)

                    h2_segundos = document.getElementById("segundos");
                    h2_segundos.innerText = segundos;
                    
                    if(segundos == 60){
                        segundos = 0; 
                    }
                }
                let intervalo_segundos = setInterval(sumar_segundos , 1000);
                intervalo_segundos;
        
                function sumar_minutos(){
                    minutos = minutos + 1;
                    console.log("Minutos:" , minutos)

                    h2_minutos = document.getElementById("minutos");
                    h2_minutos.innerText = minutos;

                }
                
                let intervalo_minutos = setInterval(sumar_minutos , 10000);
                intervalo_minutos;
            }


            else if(btn_play.textContent == "||"){

                btn_play.innerHTML = "►"

                console.log("Milésimas detenidas")

            }

    })
}


///////////FUNCIONES///////////

play();



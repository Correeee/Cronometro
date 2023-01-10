console.log("Bienvenido al Cronómetro ⌚")


let minutos = 0
console.log("Minutos:" , minutos);

let segundos = 0
console.log("Segundos:" , segundos);

let milesimas = 0
console.log("Milésimas:" , milesimas);

var intervalo_milesimas;
var intervalo_minutos;
var intervalo_segundos;

let sound_play = new Audio ("sound/play.mp3")
let sound_stop = new Audio ("sound/stop.mp3")

function sonido(){
    let btn_play = document.getElementById("btn_play");

        btn_play.addEventListener("click" , function(e){
                sound_play.play();
                sound_play.currentTime = 0;
        })
        
}


function play(){

    let btn_play = document.getElementById("btn_play");

        btn_play.addEventListener("click" , function(e){

            if(btn_play.innerHTML == "►"){
            document.getElementById("timer").style.backgroundColor="#52b788"; //CAMBIA COLOR
                    function sumar_milesimas(){
                        milesimas = milesimas + 1;
                        let h2_milesimas = document.getElementById("milesimas")

                        h2_milesimas.innerText = milesimas
                        console.log("Milésimas:" , milesimas)

                        if(milesimas == 10){
                            milesimas = 0; 
                        }

                        btn_play.addEventListener("click" , function(e){
                            clearInterval(intervalo_milesimas);
                        })
                        
                    }

                    intervalo_milesimas = setInterval(sumar_milesimas , 100);
            
                    function sumar_segundos(){
                        segundos = segundos + 1;
                        console.log("Segundos:" , segundos)

                        let h2_segundos = document.getElementById("segundos");
                        h2_segundos.innerText = segundos;
                        
                        if(segundos == 60){
                            segundos = 0; 
                        }

                        btn_play.addEventListener("click" , function(e){
                            clearInterval(intervalo_segundos);
                        })
                        
                    }

                    intervalo_segundos = setInterval(sumar_segundos , 1000);
            
                    function sumar_minutos(){
                        minutos = minutos + 1;
                        console.log("Minutos:" , minutos)

                        let h2_minutos = document.getElementById("minutos");
                        h2_minutos.innerText = minutos;

                        btn_play.addEventListener("click" , function(e){
                            clearInterval(intervalo_minutos);
                        })
                        
                    }
                    
                    intervalo_minutos = setInterval(sumar_minutos , 100000);

                    btn_play.innerHTML = "||";
                    stop();
                    
                }

                btn_play.addEventListener("click" , function(e){
                    
                    if(btn_play.innerHTML == "||"){
                        document.getElementById("timer").style.backgroundColor="#457b9d"
                        btn_play.innerHTML = "►"; 
                    
                        console.log("Cronómetro en pausa ⏸️")
                        clearInterval(intervalo_minutos);
                        clearInterval(intervalo_segundos);
                        clearInterval(intervalo_milesimas);
                        
                        console.log("TIEMPO: " + minutos + " min. : " + segundos + " seg. : " + milesimas + " mil." )
                        play();
                }
                })
                
        })
}

function stop(){

    let btn_stop = document.getElementById("btn_stop");

    btn_stop.addEventListener("click" , function(e){

        if(btn_play.innerHTML == "►"){
            document.getElementById("timer").style.backgroundColor="#e63946"
            sound_stop.play();
            sound_stop.currentTime = 0;
            console.log("Cronómetro reiniciado")
            clearInterval(intervalo_minutos);
            clearInterval(intervalo_segundos);
            clearInterval(intervalo_milesimas);
            milesimas = 0
            minutos = 0
            segundos = 0
            
            let h2_milesimas = document.getElementById("milesimas")
            h2_milesimas.innerText = "00"

            let h2_segundos = document.getElementById("segundos");
            h2_segundos.innerText = "00";

            let h2_minutos = document.getElementById("minutos");
            h2_minutos.innerText = "00";
        }
        
    })
}

///////////FUNCIONES///////////

play();
sonido();




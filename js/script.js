console.log("Bienvenido al Cronómetro ⌚")


let minutos = 0;
console.log("Minutos:" , minutos);

let segundos = 0;
console.log("Segundos:" , segundos);

let milesimas = 0;
console.log("Milésimas:" , milesimas);


let sound_play = new Audio ("sound/play.mp3")
let sound_stop = new Audio ("sound/stop.mp3")

////BUTTONS///

let btn_play = document.getElementById("btn_play");

////FUNCIONES////


function sonido(){

        btn_play.addEventListener("click" , function(e){
                sound_play.play();
                sound_play.currentTime = 0;
        })
        
}

function play(){

    btn_play.addEventListener("click" , function(e){

            if(btn_play.textContent == "►"){
                console.log("Minutos:" , minutos);
                console.log("Segundos:" , segundos);
                console.log("Milésimas:" , milesimas);


                document.getElementById("timer").style.backgroundColor="#52b788";
                btn_play.textContent = "||";

                        function sumar_tiempo(){
                            milesimas++;

                            let h2_milesimas = document.getElementById("milesimas");
                            h2_milesimas.innerText = milesimas
                            
                            if(milesimas == 10){
                                milesimas = 0
                                segundos++;
                                let h2_segundos = document.getElementById("segundos");

                                    if(segundos < 10 ){
                                    h2_segundos.innerText = "0" + segundos;
                                    }

                                    else if(segundos >= 10){
                                        h2_segundos.innerText = segundos;
                                    }

                                    if(segundos == 60){
                                        segundos = 0;
                                        minutos++;
                                        let h2_minutos = document.getElementById("minutos");
                                        if(minutos < 10 ){
                                            h2_minutos.innerText = "0" + minutos;
                                        }

                                        else if(minutos >= 10 ){
                                            h2_minutos.innerText = minutos;
                                        }

                                    }
                            }
                            
                        }
                            intervalo = setInterval(sumar_tiempo , 100);
                        
            }

            else if(btn_play.textContent == "||"){

                document.getElementById("timer").style.backgroundColor="#457b9d"
                btn_play.textContent = "►"

                clearInterval(intervalo);

                console.log("Cronómetro pausado ⏸️ en: " , minutos, "min" , segundos , "seg" , milesimas , "mil");
                
            }
    })
}

function stop(){

    btn_stop.addEventListener("click" , function(e){

        let h2_milesimas = document.getElementById("milesimas")
        let h2_segundos = document.getElementById("segundos");
        let h2_minutos = document.getElementById("minutos");

        if(btn_play.textContent == "►" && h2_milesimas.textContent != 0){
            document.getElementById("timer").style.backgroundColor="#e63946"
            sound_stop.play();
            sound_stop.currentTime = 0;


            Toastify({
                text: `${minutos} min : ${segundos} seg : ${milesimas} mil `,
                duration: 5000,
                newWindow: false,
                close: false,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                onClick: function(){} // Callback after click
            }).showToast();

            
            clearInterval(intervalo);
            milesimas = 0
            minutos = 0
            segundos = 0
            
            h2_milesimas.innerText = "00"

            h2_segundos.innerText = "00";

            h2_minutos.innerText = "00";
            console.log("Cronómetro reiniciado")

        }
    })

}

///////////FUNCIONES///////////

play();
stop();
sonido();




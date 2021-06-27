score=0;GItime=500;
function jump(){
    const pobj = document.getElementById("play");
    document.getElementById("clickaudio").play()
    if(pobj.classList != "jumpup"){
        pobj.classList.remove("jumpdown");
        pobj.classList.add("jumpup");
    }
    else{
        pobj.classList.remove("jumpup");
        pobj.classList.add("jumpdown");
    }
}
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        if(document.getElementById("board").style.display!= "flex"){
            jump();
        }
       run();
    }
  })

function game(){
    document.getElementById("notice").style.display="none";
}
function run(){
    document.getElementById("title2").style.display="none";
    document.getElementById("middle").style.backgroundColor="rgb(50, 50,50)";
    const fhole = document.getElementById("fhole");
    const chole = document.getElementById("chole");
    const pobj = document.getElementById("play");
    gam=0;
    var gameinterval = setInterval(() => {
        time=Math.floor((Math.random() * 10) + 1);
        score++;
        if (time%2==0 && fhole.classList != "fhole" && chole.classList != "fhole"){
            fhole.style.display="block";
            fhole.classList.add("fhole");

            setTimeout(function(){
                if (gam==0){
                    fhole.classList.remove("fhole");
                    fhole.style.display="none";
                }
            },3000)
        }
        else if (time%2!=0 && chole.classList != "fhole" && fhole.classList != "fhole"){
            chole.style.display="block";
            chole.classList.add("fhole");

            setTimeout(function(){
                if(gam==0){
                    chole.classList.remove("fhole");
                    chole.style.display="none";
                }
            },3000)
        }
    }, GItime);
    var checkinterval = setInterval(() => {
        let cubeposition = parseInt(window.getComputedStyle(pobj).getPropertyValue("top"))
        let fholeposition = parseInt(window.getComputedStyle(fhole).getPropertyValue("margin-left"))
        let choleposition = parseInt(window.getComputedStyle(chole).getPropertyValue("margin-left"))
        document.getElementById("title1").innerHTML=score;
        if(fholeposition<195 && fholeposition>75 && cubeposition==113 && fhole.classList == "fhole" ){
            fhole.style.animationPlayState="paused";
            clearInterval(gameinterval);
            clearInterval(checkinterval);
            document.getElementById("board").style.display="flex";
            gam=1
        }
        else if(choleposition<193 && choleposition>75 && cubeposition==0 && chole.classList == "fhole" ){
            chole.style.animationPlayState="paused";
            clearInterval(gameinterval);
            clearInterval(checkinterval);
            document.getElementById("board").style.display="flex";
            gam=1
        }
        if(score<500 && chole.classList != "fhole" && fhole.classList != "fhole"){
            fhole.style.animationDuration= "2.5s";
            chole.style.animationDuration= "2.5s";
            GItime=500;
        }
        else if(score<1000  && chole.classList != "fhole" && fhole.classList != "fhole"){
            fhole.style.animationDuration= "2s";
            chole.style.animationDuration= "2s";
            pobj.style.animationDuration="0.15s";
            GItime=400;
        }
        else if (score<2000  && chole.classList != "fhole" && fhole.classList != "fhole"){
            fhole.style.animationDuration= "1.5s";
            chole.style.animationDuration= "1.5s";
            pobj.style.animationDuration="0.1s";
            GItime=300;
        }
        else if (score<4000  && chole.classList != "fhole" && fhole.classList != "fhole") {
            fhole.style.animationDuration= "1s";
            chole.style.animationDuration= "1s";
            pobj.style.animationDuration="0.05s";
            GItime=200;
        }
        else if (chole.classList != "fhole" && fhole.classList != "fhole"){
            fhole.style.animationDuration= "2.5s";
            fhole.style.animationDuration= "0.75s";
            chole.style.animationDuration= "0.75s";
            pobj.style.animationDuration="0.025s";
            GItime=100;
        }
    }, 1);
}
function storage(txt){
    const person = {
      name: txt,
      Score: score,
    }
    p = JSON.parse(localStorage.getItem('user'));
    if(p!=null){
        if(p.Score<=person.Score){
            localStorage.setItem('user',JSON.stringify(person))
        }
    }
    else{
        localStorage.setItem('user',JSON.stringify(person))
    }
  }
  window.onload=function() {
    p = JSON.parse(localStorage.getItem('user'));
    if(p!=null){
        document.getElementById("highest").innerHTML= p.name + "  " + p.Score  ;
    }
    else{
        document.getElementById("highest").innerHTML="No high score";
    }
  }

let d = document.getElementById("anime");
let x = 1;



d.onclick = function() {
    x++;
    if(x % 2 == 0){
        d.style.animationPlayState= `paused`;
    }
    if(x % 2 != 0){
        d.style.animationPlayState= `running`;

    }
}

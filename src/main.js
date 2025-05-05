window.onresize = screen ;
window.onload = screen;


function screen () {
    myWindow = window.innerWidth;
    window.document.getElementById('size').innerHTML = "Width : " + myWindow ;
}



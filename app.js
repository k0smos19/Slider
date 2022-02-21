document.getElementById('btn').onclick = sliderLeft;
var left = 0;
function sliderLeft() {
    left = left - 128;
    if(left < -512) {
        left = 0
    }
    document.getElementById('polosa');
    polosa.style.left = left +'px';

}
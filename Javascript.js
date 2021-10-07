function hover(id, backgroundcolor){
    var exist = document.getElementById(id)
    exist.style.background = backgroundcolor;
    exist.style.transition = "0.1s";
    exist.style.cursor = "pointer";

}
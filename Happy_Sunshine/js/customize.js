var buttonClicked = null;
function highlight(id) {
    if(buttonClicked != null)
    {
        buttonClicked.style.background = "rgba(255,0,0,0.8)";
    }

    buttonClicked  = document.getElementById(id);
    buttonClicked.style.background =  "rgba(255,0,0,0.6)";
}
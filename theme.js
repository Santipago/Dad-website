const colorSwitch = document.getElementById("colorswitch");
const body = document.body;

body.classList.add("winter-theme");

colorSwitch.onclick = function()
{
    if(colorSwitch.checked){
        body.classList.replace("winter-theme", "summer-theme")
    }
    else{
        body.classList.replace("summer-theme", "winter-theme")
    }


}
const sidebarIcon = document.getElementById("sidebar-icon");
const sidebarContent = document.querySelector(".sidebar-content");

let open = false;

sidebarIcon.onclick = function(){
    sidebarContent.style.display = "block";
    
    if(open==true){
        sidebarContent.style.display = "none";
        open = false;
    }
    else{
        open = true;
    }
}   


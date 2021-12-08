// var background = document.getElementById("welcome");
// function magic() {
//     background.classList.remove("welcome");
//     background.classList.add("welcome_css");
// }

function myFunction(event) {
    var elements = document.querySelector(".li_css");
    if (elements!==null){
        elements.classList.remove("li_css")
    }
    event.target.classList.add("li_css")
}
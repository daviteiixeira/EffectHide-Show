var btn = document.querySelector(".btn");
var container = document.querySelector(".container");

btn.addEventListener("click", function () {

    if (container.classList.contains("classAdd")){
        container.classList.remove("classAdd");
    } else{
        container.classList.add("classAdd");
    }

});
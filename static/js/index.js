let container = document.getElementById("container");



function setDone(element) {
    console.log(element);
    if(!(element.tagName == "DIV")) {
        element.parentNode.classList.toggle("done");
        return;
    }
    element.classList.toggle("done");
}


for (child in container.childNodes) {
    if (container.childNodes[child].tagName == "DIV") {
        container.childNodes[child].addEventListener("click", (e) => {
            setDone(e.target);
        })
    }
}
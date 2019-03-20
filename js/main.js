function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementsByClassName("blurlayer")[0].classList.add('blur');
    document.getElementsByClassName("blurlayer")[0].classList.add('blur');
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementsByClassName("blurlayer")[0].classList.remove('blur');
    document.getElementsByClassName("blurlayer")[0].classList.remove('blur');
}
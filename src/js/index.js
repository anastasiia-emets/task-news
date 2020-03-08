function viewComment() {
    document.querySelector(".comment").style.display = "block";
};

var modal = document.querySelector(".modal");
var btn = document.querySelector(".article__button");
var span = document.getElementsByClassName("close")[0];
var sbm = document.querySelector(".form__button");
btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
sbm.onclick = function () {
    modal.style.display = "none";
}
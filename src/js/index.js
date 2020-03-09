function viewComment() {

    var x = document.querySelector(".comment");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
};

var modal = document.querySelector(".modal");
var btn = document.querySelector(".article__button");
var span = document.getElementsByClassName("close")[0];
var sbm = document.querySelector(".form__button");
btn.toggle.onclick = function () {
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
var progressBar = document.querySelector(".progress");

function setProgressBarValue() {
    progressBar.style.width = "100%";
}
function resetProgressBarValue() {
    progressBar.style.width = "0%";
}

var images = document.querySelectorAll(".progressOver");

images.forEach(function (image) {
    image.addEventListener("mouseover", setProgressBarValue);
});

images.forEach(function (image) {
    image.addEventListener("mouseout", resetProgressBarValue);
});
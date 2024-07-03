var karakter = document.getElementById("karakter");
var blok = document.getElementById("blok");
var counter = 0;
function jump() {
    if (karakter.classList == "animatie") { return }
    karakter.classList.add("animatie");
    setTimeout(function () {
        karakter.classList.remove("animatie");
    }, 300);
}
var checkDood = setInterval(function () {
    let karakterTop = parseInt(window.getComputedStyle(karakter).getPropertyValue("top"));
    let blokLeft = parseInt(window.getComputedStyle(blok).getPropertyValue("left"));
    if (blokLeft < 20 && blokLeft > -20 && karakterTop >= 130) {
        blok.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        blok.style.animation = "blok 1s infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);
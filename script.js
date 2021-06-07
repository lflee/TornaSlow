

function play(speed) {
    var x = document.getElementById("sound");
    x.playbackRate = speed ;
    x.play();

}

function openInfo() {
    var closedDiv = document.getElementById("closed");
    var openDiv = document.getElementById("open");
    openDiv.style.display = "block";
    closedDiv.style.display = "none";
}

function closeInfo() {
    var closedDiv = document.getElementById("closed");
    var openDiv = document.getElementById("open");
    closedDiv.style.display = "block";
    openDiv.style.display = "none";
}
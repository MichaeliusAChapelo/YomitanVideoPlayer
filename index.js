const video = document.getElementById("video");
const videoSource = document.getElementById("videoSource");
const loadVideo = document.getElementById("load-video");
const loadSubtitle = document.getElementById("load-subtitle");
const subtitleDisplay = document.getElementById("subtitleDisplay");

// Loads video file
loadVideo.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        videoSource.setAttribute("src", fileURL);
        video.load();
        console.log(file);
        console.log("Video file loaded: " + file.name);
    }
})


var subtitleData = [];

// Loads subtitle file
loadSubtitle.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const contents = e.target.result;
            subtitleData = JSON.parse(contents);
            console.log("Subtitle file loaded");
            console.log(subtitleData);
        }
        reader.readAsText(file);
    }
});


// Display subtitles based on current video time
video.addEventListener("timeupdate", () => {
    const currentSubtitle = subtitleData.find(
        subtitle => video.currentTime >= subtitle.start && video.currentTime <= subtitle.end
    );

    if (currentSubtitle)
        subtitleDisplay.innerHTML = currentSubtitle.text;
    else
        subtitleDisplay.textContent = "";
});
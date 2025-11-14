# Yomitan Video Player

A simple and offline browser page that loads local video files and allows subtitle text to be highlighted. Intended to be used with [Yomitan](https://github.com/yomidevs/yomitan).

<img width="1399" height="915" alt="YomitanVideoPlayer" src="https://github.com/user-attachments/assets/4dd26834-aa41-44de-83f7-88094a7b5a1a" />

## Description

[Yomitan](https://github.com/yomidevs/yomitan) is a browser extension that allows pop-up dictionary on text that you highlight. Unfortunately, this doesn't work with local video players such as VLC, nor typical online video streaming platforms such as YouTube.

While HTML5 video players do allow subtitles, the text is embedded into the video player and cannot be highlighted for dictionary look-ups either. As such, I created an HTML page that displays the subtitles beneath the video player, which can be highlighted for Yomitan use, or copy-pasted elsewhere for further study.

An internet connection is not required: The HTML page and JavaScript file can run locally on your computer, loading video files and subtitles from your computer.

## How to use

1) Ensure that your video is in .mp4 format. You can use [File Converter](https://github.com/Tichau/FileConverter/) if needed.
2) Open your subtitle file in [Subtitle Edit](https://github.com/SubtitleEdit/subtitleedit) and save as JSON (regular JSON format, don't use any variants).
3) Download the index.html and index.js files from this repository, then open index.html in your browser locally.
4) In the upper right corner of the page, press the buttons to select your MP4 video and your JSON subtitles.

Now when the video plays, the subtitles should now appear below the video player! You may now use Yomitan to look up words.

## Customization

You can adjust text size, page colour, video player size, et.c. by editing index.html in a text editor of your choice.

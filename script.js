let videos = [];
let currentIndex = 0;
const player = document.getElementById('youtubePlayer');

async function loadVideos() {
  const response = await fetch('youtube.txt');
  const text = await response.text();
  videos = text.trim().split('\n').filter(line => line.trim() !== '');
  if (videos.length > 0) {
    player.src = videos[0];
  }
}

document.getElementById('next').addEventListener('click', () => {
  if (videos.length > 0) {
    currentIndex = (currentIndex + 1) % videos.length;
    player.src = videos[currentIndex];
  }
});

document.getElementById('prev').addEventListener('click', () => {
  if (videos.length > 0) {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    player.src = videos[currentIndex];
  }
});

loadVideos();

const video = document.querySelector('video');
const playButton = document.querySelector('.toggle');
const volume = document.querySelector('#volume');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const backward = document.querySelector('.skip-backward');
const forward = document.querySelector('.skip-forward');
const playBack = document.querySelector('#playbackRate');
const commentButton = document.querySelector('#comment-button');
const inputText = document.querySelector('#comment-text');
const comment = document.querySelector('.comments');

const playAndPause = function () {
  if( playButton.innerText === "►" ) {
    video.play();
    playButton.innerText = "||"
  } else {
    video.pause();
    playButton.innerText = "►"
  }
}

const volumeAdjustment = function (e) {
  video.volume = e.target.value
}

const skipBackward = function () {
  video.currentTime= video.currentTime - 10; 
}

const skipForward = function () {
  video.currentTime= video.currentTime + 25; 
}

const currentTime = function () {
  let ratio = 100/video.duration;  
  progressFilled.style.flexBasis = `${video.currentTime * ratio}%`;
}
setInterval(currentTime, 100);

const scrub = function (e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  progressFilled.style.flexBasis = `${scrubTime}%`;
  video.currentTime = scrubTime;

}

const playBackRate = function (e) {
  video.playbackRate = e.target.value;
}

const leaveComments = function (e) {
  const child = document.createElement('div');
  child.classList.add("comment");
  child.innerHTML = inputText.value;
  comment.appendChild(child);
  inputText.value= "";
}

video.addEventListener('click', playAndPause);
playButton.addEventListener('click', playAndPause);
volume.addEventListener('mousemove', volumeAdjustment);
backward.addEventListener('click', skipBackward);
forward.addEventListener('click', skipForward);
progress.addEventListener('click', scrub);
playBack.addEventListener('mousemove', playBackRate);
commentButton.addEventListener('click', leaveComments);
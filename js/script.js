const video = document.querySelector('video');
const spans = document.querySelectorAll('span');
const transcript = document.querySelector('.transcript');

$('video').mediaelementplayer({
   features: ['playpause', 'current','progress', 'duration', 'volume', 'fullscreen']
 });


//highlight transcript while playing
 video.addEventListener('timeupdate', () => {
  let time = video.currentTime;

  for(let i = 0; i < spans.length; i++) {
    let startTime = spans[i].getAttribute('data-start');
    let endTime = spans[i].getAttribute('data-end');

    if(time >= startTime  && time <= endTime){
      spans[i].setAttribute('class', 'highlight');
    }
    else {
      spans[i].removeAttribute('class', 'highlight' );
    }

  }


});


//jump to appropriate time in video when transcript is clicked
transcript.addEventListener('click', function(event){
  let clicked = event.target;

 if(clicked.tagName === 'SPAN'){
   let start = clicked.getAttribute('data-start');
   video.currentTime = start;

   if (video.paused) {
    video.play();
  }
 }

});

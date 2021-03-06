import playSvg from '../svg/play.svg';
import pauseSvg from '../svg/pause.svg';

import rainSound from '../sounds/rain.mp3'
import beachSound from '../sounds/beach.mp3'
import forestSound from '../sounds/forest.mp3'

import rainVideo from '../video/rain.mp4'
import beachVideo from '../video/beach.mp4'
import forestVideo from '../video/forest.mp4'


const app = () => {
    
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');
    
    // set first video
    video.src = rainVideo;
    song.src = rainSound;
    // set svg (play button)
    play.src = playSvg;
    

    //sounds
    const sounds = document.querySelectorAll('.sound-picker button');

    //Time display
    const timeDislay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll('.time-select button');
    // Get the length of the outline
    const outlineLenth = outline.getTotalLength();
    
    // Duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLenth;
    outline.style.strokeDashoffset = outlineLenth;

    // Pick different sounds
    sounds.forEach(sound => {
        sound.addEventListener('click', function () {
            if (sound.className === 'rain') {
                song.src = rainSound;
                video.src = rainVideo;
            } else if (sound.className === 'beach') {
                song.src = beachSound;
                video.src = beachVideo;
            } else { 
                song.src = forestSound;
                video.src = forestVideo;
            }
            // song.src = this.getAttribute('data-sound');
            // video.src = this.getAttribute('data-video');
            checkPlyaing(song);
        })
    })

    // play sound
    play.addEventListener('click', () => {
        checkPlyaing(song);
    });

    // Select sound 
    timeSelect.forEach(option => {
        option.addEventListener('click', function(){ 
            fakeDuration = this.getAttribute('data-time');
            const sec = Math.floor(fakeDuration % 60);
            timeDislay.textContent = `${Math.floor(fakeDuration / 60)} : ${sec < 10 ? `0${sec}` : sec}`
        })
    })

    // Create a function specific to stop and play the sounds
    const checkPlyaing = song => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = pauseSvg; 
            
        } else {
            song.pause();
            video.pause();
            play.src = playSvg; 
        }
    }

    // We can animate the circle
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

        // Animate the circle  
        let progress = outlineLenth - (currentTime / fakeDuration) * outlineLenth;
        outline.style.strokeDashoffset = progress;        
        // Animate the text

        timeDislay.textContent = `${minutes}: ${seconds < 10? `0${seconds}` : seconds}`;

        if(currentTime >= fakeDuration) {
            song.pause();
            video.pause();
            song.currentTime = 0; // reset 
            play.src = playSvg;
        }
    };
    // Compute current Year 
    const year = new Date().getFullYear();
    const thisYear = document.querySelector('.this-year');
    thisYear.innerHTML = year;

};


app();
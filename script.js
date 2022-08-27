console.log("welcome to spotify");
//initialize the variables
let songindex=0;

let audioelement= new Audio('lastpeg.mp3');
let masterplay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let mastersongname=document.getElementById('mastersongname');
let songs=[
      { songname: "LAST PEG" , filePath: "songs/1.mp3" , coverPath: "covers/1.jpg" },
      { songname: "COCA COLA" , filePath: "songs/2.mp3" , coverPath: "covers/2.jpg" },
      { songname: "JAATA KI BAARAT" , filePath: "songs/j3.m4a" , coverPath: "covers/3.jpg" },
      { songname: "BAHU KALE KI" , filePath: "songs/4.m4a" , coverPath: "covers/4.jpg" },
         { songname: "SHADES OF BLACK" , filePath: "songs/5.mp3" , coverPath: "covers/5.jpg" },
         { songname: "RINGTONE" , filePath: "songs/6.mp3" , coverPath: "covers/6.jpg" },

]
songitem.forEach((element,i)=>{
         element.getElementsByTagName("img")[0].src=songs[i].coverPath;
         element.getElementsByClassName("songName")[0].innerText=songs[i].songname;
})
// audio play/pause
masterPlay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioelement.addEventListener('timeupdate',()=>{
    progress= parseInt(audioelement.currentTime/audioelement.duration*100);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value*audioelement.duration/100;
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle'); 
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
 element.addEventListener('click',(e)=>{
    makeallplays();
    songindex=parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioelement.src=`./songs/${songindex+1}.mp3`;
       console.log(audioelement.src);
       audioelement.currentTime=0;
       audioelement.play();
       gif.style.opacity=1;
       masterplay.classList.remove('fa-play-circle');
       masterplay.classList.add('fa-pause-circle'); 
       mastersongname.innerText=songs[songindex].songname;
 })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=5){
       songindex=0;
    }
    else{
       songindex+=1;
    }

    audioelement.src=`./songs/${songindex+1}.mp3`;
    audioelement.currentTime=0;
    mastersongname.innerText=songs[songindex].songname;
          audioelement.play();
          gif.style.opacity=1;
          masterplay.classList.remove('fa-play-circle');
          masterplay.classList.add('fa-pause-circle'); 
   });
   document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
       songindex=5;
    }
    else{
       songindex-=1;
    }
    audioelement.src=`./songs/${songindex+1}.mp3`;
    audioelement.currentTime=0;
    mastersongname.innerText=songs[songindex].songname;
          audioelement.play();
          gif.style.opacity=1;
          masterplay.classList.remove('fa-play-circle');
          masterplay.classList.add('fa-pause-circle'); 
   });
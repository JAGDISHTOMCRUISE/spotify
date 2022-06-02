console.log("welcome to spotify");

let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songname:"sultan",filepath:"song/1.mp3",coverpath:"images/cover.jpg"},
    {songname:"sultan",filepath:"song/2.mp3",coverpath:"images/cover.jpg"},
    {songname:"sultan",filepath:"song/3.mp3",coverpath:"images/cover.jpg"},
    {songname:"sultan",filepath:"song/4.mp3",coverpath:"images/cover.jpg"},
    {songname:"sultan",filepath:"song/5.mp3",coverpath:"images/cover.jpg"},
    {songname:"sultan",filepath:"song/6.mp3",coverpath:"images/cover.jpg"},
    {songname:"sultan",filepath:"song/4.mp3",coverpath:"images/cover.jpg"},
    {songname:"sultan",filepath:"song/5.mp3",coverpath:"images/cover.jpg"},
    {songname:"sultan",filepath:"song/3.mp3",coverpath:"images/cover.jpg"},
    {songname:"sultan",filepath:"song/6.mp3",coverpath:"images/cover.jpg"},


]

songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innertext=songs[i].songname;

    
}
)

masterPlay.addEventListener('click',()=>{

    if(audioElement.paused || audioElement.currentTime<=0){

        audioElement.play();
//masterPlay.classList.remove('fa-circle-play');
        //masterPlay.classList.add('fa-backward-step');
        gif.style.opacity=1;
      
    }

    else{
        audioElement.pause();
       //masterPlay.classList.remove('fa-circle-play');
       //masterPlay.classList.add('fa-circle-play');
       gif.style.opacity=0;

    }
})


audioElement.addEventListener('timeupdate',()=>{
   

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myprogressbar.value=progress;

})
 
myprogressbar.addEventListener('change',()=>{

    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.target.classlist.remove('fa-circle-pause');
            e.target.classlist.add('fa-circle-play');
    
        })

}
   




Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplays();
        e.target.classlist.remove('fa-circle-play');
        e.target.classlist.add('fa-circle-pause');

    })


})
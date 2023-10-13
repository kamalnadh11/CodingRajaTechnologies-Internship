const music = new Audio('./audio/17.mp3');
music.addEventListener('canplaythrough', function() {
    //music.play();
  });

const songs = [
    {
        id: "1",
        songName:`Prema O Prema<br><div class="subtitle"> Sid Sriram,Hemambika</div>`,
        poster: "./img/1.jpg",
    },
    {
        id: "2",
        songName:`Kannula Baasalu Theliyavule<br><div class="subtitle"> Karthik</div>`,
        poster: "./img/2.jpg",
    },
    {
        id: "3",
        songName:`Vonivesina Deepavali <br>
        <div class="subtitle"> Raghu Kunche</div>`,
        poster: "./img/3.jpg",
    },
    {
        id: "4",
        songName:`Evvaro Evvaro<br><div class="subtitle"> Karthik, Priya Hemesh</div>`,
        poster: "./img/4.jpg",
    },
    {
        id: "5",
        songName:` Ninnele<br><div class="subtitle"> Anurag Kulkarni, Shreya Goshal </div>`,
        poster: "./img/5.jpg",
    },
    {
        id: "6",
        songName:`Nee Chitram Choosi<br><div class="subtitle"> Anurag Kulkarni</div>`,
        poster: "./img/6.jpg",
    },
    {
        id: "7",
        songName:`Nee Paata Madhuram<br><div class="subtitle"> Roop Kumar,Shreya Ghoshal </div>`,
        poster: "./img/7.jpg",
    },
    {
        id: "8",
        songName:`Neneppudaina<br><div class="subtitle"> Shankar Mahadevan,Shreya Ghoshal </div>`,
        poster: "./img/8.jpg",
    },
    {
        id: "9",
        songName:`Mastaaru Mastaaru <br><div class="subtitle"> Shweta Mohan</div>`,
        poster: "./img/9.jpg",
    },
    {
        id: "10",
        songName:` Koppamga Kopamga<br><div class="subtitle"> Armaan Malik, S S Thaman</div>`,
        poster: "./img/10.jpg",
    },
    {
        id: "11",
        songName:`Kalaavathi<br><div class="subtitle">Sid Sriram</div>`,
        poster: "./img/11.jpg",
    },
    {
        id: "12",
        songName:`Oh Sita Hey Rama<br><div class="subtitle"> SPB Charan,Ramya Behara</div>`,
        poster: "./img/12.jpg", 
    },
    {
        id: "13",
        songName:`Dheemthanana <br><div class="subtitle"> Achu, Sid Sriram </div>`,
        poster: "./img/13.jpg", 
    },
    {
        id: "14",
        songName:`Jinthaak Chithaka<br><div class="subtitle"> Bheems Ceciroleo,Mangli</div>`,
        poster: "./img/14.jpg", 
    },
    {
        id: "15",
        songName:` Manasantha <br><<div class="subtitle"> K.K.</div>`,
        poster: "./img/15.jpg", 
    },
    {
        id: "16",
        songName:`O Range<br> <div class="subtitle"> Benny Dayal</div>`,
        poster: "./img/16.jpg", 
    },
    {
        id: "17",
        songName:`Ranjithame<br><div class="subtitle"> Anurag Kulkarni,M M Manasi</div>`,
        poster: "./img/17.jpg", 
    },
    {
        id: "18",
        songName:`Bangaara<br><div class="subtitle"> Ramya K</div>`,
        poster: "./img/18.jpg", 
    },
    {
        id: "19",
        songName:`Ek Do Teen Chaar<br><div class="subtitle"> Raghu Kunche, Andrea Jeremiah</div>`,
        poster: "./img/19.jpg", 
    },
    {
        id: "20",
        songName:` Arere Vaanaa<br><div class="subtitle"> Rahul Nambiar,Saindhavi</div>`,
        poster: "./img/20.jpg", 
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    console.log('Current Index:', i);
    console.log('Current Song Data:', songs[i]);

    // Check if songs[i] exists and has a poster property before setting the src
    if (songs[i] && songs[i].poster) {
        e.getElementsByTagName('img')[0].src = songs[i].poster;
    }

    // Similarly, check if songs[i] has a songName property before setting it
    if (songs[i] && songs[i].songName) {
        e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    }
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', () => {
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playList')).forEach((el) =>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
        el.style.background = 'rgb(105,105,170, .0)';
    })
}

let index = 0;

let poster_songPlay = document.getElementById('poster_songPlay');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playList')).forEach((e) =>{
        e.addEventListener('click',(el)=> {
            let index = el.target.id;
           // console.log(index);   
            music.src = `./audio/${index}.mp3`;
            poster_songPlay.src = `./img/${index}.jpg`;
            music.play();
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');
            

            let songTitles = songs.filter((els) => {
                return els.id == index;
            });

            songTitles.forEach(elss => {
                let {songName} = elss;
                title.innerHTML = songName;

            })

            makeAllBackground();
            Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,170, .2)"

            makeAllPlays();
            el.target.classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
            wave.classList.add('active1');
        })
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',() =>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    //console.log(music_curr);

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
     vol_bar.style.width = `${vol_a}%`;
     vol_dot.style.left = `${vol_a}%`;
     music.volume = vol_a / 100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
 


    music.src = `./audio/${index}.mp3`;
    poster_songPlay.src = `./img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;

    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,170, .2)"

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    
})

next.addEventListener('click', ()=>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
       index = 1;
    }
 


    music.src = `./audio/${index}.mp3`;
    poster_songPlay.src = `./img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;

    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,170, .2)"

    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    
})






let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})

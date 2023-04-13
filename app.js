const music=new Audio('audio/1.mp3');
// music.play();

const songs=[
    {
        id:1,
        titlename:'On My Way',
        songName:`On My Way<br><div class="subtitle">Alan Walker</div>`,
        poster:"img/1.jpg"
    },
    {
        id:2,
        titlename:'Alan Walker-Fade',
        songName:`Alan Walker-Fade<br><div class="subtitle">Alan Walker</div>`,
        poster:"img/2.jpg"
    },
    {
        id:3,
        titlename:'artoon - On & On ',
        songName:`artoon - On & On <br><div class="subtitle">Daniel Levi</div>`,
        poster:"img/3.jpg"
    },
    {
        id:4,
        titlename:'Warrior - Mortals',
        songName:`Warrior - Mortals <br><div class="subtitle">Mortals`,
        poster:"img/4.jpg"
    },
    {
        id:5,
        titlename:'Ertugrul Gazi',
        songName:`Ertugrul Gazi <br><div class="subtitle">Ertugrul`,
        poster:"img/5.jpg"
    },
    {
        id:6,
        titlename:'Electronic Music',
        songName:`Electronic Music <br><div class="subtitle">Electro</div>`,
        poster:"img/6.jpg"
    },
    {
        id:7,
        titlename:'Agar Tum Sath Ho',
        songName:`Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
        poster:"img/7.jpg"
    },


    {
        id:8,
        titlename:'Suna Hai',
        songName:`Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster:"img/8.jpg"
    },
    {
        id:9,
        titlename:'Dilber',
        songName:`Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
        poster:"img/9.jpg"
    },
    {
        id:10,
        titlename:'Duniya',
        songName:`Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster:"img/10.jpg"
    },
    {
        id:11,
        titlename:'Lagdi Lahor Di',
        songName:`Lagdi Lahor Di <br><div class="subtitle">Street Dancer 3D</div>`,
        poster:"img/11.jpg"
    },
    {
        id:12,
        titlename:'Putt Jatt Da ',
        songName:`Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
        poster:"img/12.jpg"
    },
    {
        id:13,
        titlename:'Baarishein ',
        songName:`Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster:"img/13.jpg"
    },
    {
        id:14,
        titlename:'Vaaste',
        songName:`Vaaste<br><div class="subtitle">Dhavni Bhanushali</div>`,
        poster:"img/14.jpg"
    },
    {
        id:15,
        titlename:'Lut Gaye',
        songName:`Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"img/15.jpg"
    },
    {
        id:16,
        titlename:'Tu Meri Jindagi hai Tu',
        songName:`Tu Meri Jindagi hai Tu <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"img/16.jpg"
    },
    {
        id:17,
        titlename:'Batao Yaad Hai Tumko Wo Jab',
        songName:`Batao Yaad Hai Tumko Wo Jab <br><div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster:"img/17.jpg"
    },
    {
        id:18,
        titlename:'Mere Dhol Judaiyan',
        songName:`Mere Dhol Judaiyan <br><div class="subtitle">Ali Shethi Seha Gill</div>`,
        poster:"img/18.jpg"
    },
    {
        id:19,
        titlename:'Eh Munde Pagal Ne Saare',
        songName:`Eh Munde Pagal Ne Saare <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahion</div>`,
        poster:"img/19.jpg"
    },
    {
        id:20,
        titlename:'Dunny 82K ',
        songName:`Dunny 82K <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahion</div>`,
        poster:"img/20.jpg"
    },

    {
        id:21,
        titlename:'Dilber',
        songName:`Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
        poster:"img/9.jpg"
    },
    {
        id:22,
        titlename:'Duniya',
        songName:`Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster:"img/10.jpg"
    },
    {
        id:23,
        titlename:'Lagdi Lahor Di',
        songName:`Lagdi Lahor Di <br><div class="subtitle">Street Dancer 3D</div>`,
        poster:"img/11.jpg"
    },
    {
        id:24,
        titlename:'Putt Jatt Da',
        songName:`Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
        poster:"img/12.jpg"
    },
    {
        id:25,
        titlename:'Baarishein',
        songName:`Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster:"img/13.jpg"
    },
    {
        id:26,
        titlename:'Vaaste',
        songName:`Vaaste<br><div class="subtitle">Dhavni Bhanushali</div>`,
        poster:"img/14.jpg"
    },
    {
        id:27,
        titlename:'Lut Gaye',
        songName:`Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"img/15.jpg"
    },
    {
        id:28,
        titlename:'Tu Meri Jindagi hai Tu',
        songName:`Tu Meri Jindagi hai Tu <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster:"img/16.jpg"
    },
    {
        id:29,
        titlename:'Batao Yaad Hai Tumko Wo Jab',
        songName:`Batao Yaad Hai Tumko Wo Jab <br><div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster:"img/17.jpg"
    },
    {
        id:30,
        titlename:'Mere Dhol Judaiyan',
        songName:`Mere Dhol Judaiyan <br><div class="subtitle">Ali Shethi Seha Gill</div>`,
        poster:"img/18.jpg"
    },
    {
        id:31,
        titlename:'Eh Munde Pagal Ne Saare',
        songName:`Eh Munde Pagal Ne Saare <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahion</div>`,
        poster:"img/19.jpg"
    },
    {
        id:32,
        titlename:'Dunny 82K',
        songName:`Dunny 82K <br><div class="subtitle">Ap Dhillon, Gurinder Gill, Shinda Kahion</div>`,
        poster:"img/20.jpg"
    },
]


Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});
let masterPlay=document.getElementById("masterPlay");
let wave=document.getElementById("wave");

masterPlay.addEventListener("click",()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add("active1")
        masterPlay.classList.add("bi-pause-fill")
        masterPlay.classList.remove("bi-play-fill")
    }
    else{
        wave.classList.remove("active1")
        music.pause();
        masterPlay.classList.remove("bi-pause-fill")
        masterPlay.classList.add("bi-play-fill")
    }
})

const makeAllBackground=()=>{
Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105,105,105,.0)'
    })
}
const makeAllplays=()=>{
Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
    el.classList.add('bi-play-circle-fill')
    el.classList.remove('bi-pause-circle-fill')
})
}

let pop_song_left=document.getElementById("pop_song_left");
let pop_art_left=document.getElementById("pop_art_left");
let pop_song_right=document.getElementById("pop_song_right");
let pop_art_right=document.getElementById("pop_art_right");
let pop_song=document.getElementsByClassName("pop_song")[0];
let item=document.getElementsByClassName("item")[0];


pop_song_right.addEventListener("click",() => {
    pop_song.scrollLeft +=300;
})
pop_art_right.addEventListener("click",() => {
    item.scrollLeft +=300;
})
pop_song_left.addEventListener("click",function(){
    pop_song.scrollLeft -=200;
})
pop_art_left.addEventListener("click",() => {
    item.scrollLeft -=200;
})
let index=1;
let poster_master_play=document.getElementById('poster_master_play');
let title=document.getElementById('title');
let download_music=document.getElementById('download_music')
Array.from(document.getElementsByClassName("playlistplay")).forEach((e)=>{
    e.addEventListener("click",(el)=>{
        index=el.target.id
        music.src=`audio/${index}.mp3`
        poster_master_play.src=`img/${index}.jpg`;
        masterPlay.classList.add("bi-pause-fill")
        masterPlay.classList.remove("bi-play-fill")
    
        let songTitles=songs.filter((els)=> {
            // if(els.id==index){
            //     return els
            // }
            return els.id==index;
        })
   
        songTitles.forEach((elss) => {
            // let song=elss.songName
            // title.innerHTML= song;
            let {songName}=elss;
            let {titlename}=elss;
            title.innerHTML= songName;
            download_music.setAttribute('download',titlename)
        })
        songs
        music.play()
        makeAllBackground();

        if(index<9){
            Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)'
        }
        else{
            Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)'
            Array.from(document.getElementsByClassName('songItem'))[parseFloat(index)+11].style.background='rgb(105,105,105,.1)'
        }
        makeAllplays();
        wave.classList.add("active1")
        if(index<9){
            Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
            el.target.classList.add('bi-pause-circle-fill');
        }
        else{
            Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
            Array.from(document.getElementsByClassName('playlistplay'))[parseFloat(index)+11].classList.remove('bi-play-circle-fill');
            Array.from(document.getElementsByClassName('playlistplay'))[parseFloat(index)+11].classList.add('bi-pause-circle-fill');
            document.getElementById(el.target.id).classList.remove('bi-play-circle-fill')
            document.getElementById(el.target.id).classList.add('bi-pause-circle-fill')
        }
        // el.target.classList.remove('bi-pause-fill');
        // el.target.classList.add('bi-play-fill');
        download_music.href=`audio/${index}.mp3`
    })
})

let currentstart=document.getElementById('currentstart');
let currentend=document.getElementById('currentend');
let seek=document.getElementById('seek');
let dot=document.getElementsByClassName('dot')[0];
let bar2=document.getElementById('bar2');


music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;

    let min1=Math.floor(music_dur/60);
    let sec1=Math.floor(music_dur%60);
    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    
    let progressBar=music_curr*100/music_dur
    console.log(progressBar)
    seek.value=progressBar;
    // console.log(seek.value)
    let seekbar=seek.value;
    bar2.style.width=`${progressBar}%`;
    dot.style.left=`${progressBar}%`;

    let currentend=document.getElementById('currentend');
    if(sec1<10){
        sec1=`0${sec1}`
    }
        currentend.innerHTML=`${min1} : ${sec1}`;
    if(sec2<10){
        sec2=`0${sec2}`
    }
    currentstart.innerHTML=`${min2} : ${sec2}`;

    seek.addEventListener('click',()=>{
        music.currentTime=seek.value*music.duration/100;
    })

})
 let vol_icon=document.getElementById('vol_icon');
 let vol=document.getElementById('vol');
 let vol_bar=document.getElementsByClassName('vol_bar')[0];
 let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.add('bi-volume-off-fill')
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-off-fill')
        vol_icon.classList.add('bi-volume-down-fill')
    }
    if(vol.value>50){
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-off-fill')
        vol_icon.classList.add('bi-volume-up-fill')
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`
    vol_dot.style.left=`${vol_a}%`
    music.volume=vol_a/100;
})

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    if(index==1){
        index=parseFloat(document.getElementsByClassName('songItem').length)-(document.getElementsByClassName('songItem').length-8)/2}  
    else{index-=1;}
    
    music.src=`audio/${index}.mp3`
    poster_master_play.src=`img/${index}.jpg`;
    masterPlay.classList.add("bi-pause-fill")
    masterPlay.classList.remove("bi-play-fill")

    let songTitles=songs.filter((els)=> {
        return els.id==index;
    })

    songTitles.forEach((elss) => {
        let {songName}=elss;
        title.innerHTML= songName;
    })
    music.play()
    makeAllBackground();

    if(index<9){
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)'
    }
    else{
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)'
        Array.from(document.getElementsByClassName('songItem'))[parseFloat(index)+11].style.background='rgb(105,105,105,.1)'
    }
    makeAllplays();
    wave.classList.add("active1")
    if(index<9){
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
    }
    else{
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[parseFloat(index)+11].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[parseFloat(index)+11].classList.add('bi-pause-circle-fill');
    }
})

next.addEventListener('click',()=>{
    if(index==1){
        index=parseFloat(document.getElementsByClassName('songItem').length)-(document.getElementsByClassName('songItem').length-8)/2}  
    else{index++;}
    
    music.src=`audio/${index}.mp3`
    poster_master_play.src=`img/${index}.jpg`;
    masterPlay.classList.add("bi-pause-fill")
    masterPlay.classList.remove("bi-play-fill")

    let songTitles=songs.filter((els)=> {
        return els.id==index;
    })

    songTitles.forEach((elss) => {
        let {songName}=elss;
        title.innerHTML= songName;
    })
    music.play()
    makeAllBackground();

    if(index<9){
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)'
    }
    else{
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)'
        Array.from(document.getElementsByClassName('songItem'))[parseFloat(index)+11].style.background='rgb(105,105,105,.1)'
    }
    makeAllplays();
    wave.classList.add("active1")
    if(index<9){
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
    }
    else{
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[parseFloat(index)+11].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[parseFloat(index)+11].classList.add('bi-pause-circle-fill');
    }
    
})

let shuffle=document.getElementsByClassName('shuffle')[0];
 
shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML;
    switch (a) {
        case "Next":
            shuffle.classList.add('bi-arrow-repeat')
            shuffle.classList.remove('bi-music-note-beamed')
            shuffle.classList.remove('bi-shuffle')
            shuffle.innerHTML='repeat'
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat')
            shuffle.classList.remove('bi-music-note-beamed')
            shuffle.classList.add('bi-shuffle')
            shuffle.innerHTML='random'
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat')
            shuffle.classList.add('bi-music-note-beamed')
            shuffle.classList.remove('bi-shuffle')
            shuffle.innerHTML='Next'
            break;
    }
})


const next_music=()=>{
        if(index==songs.length-(songs.length-8)/2){
            index=1;
        }
        else{
            index++;
        }
        music.src=`audio/${index}.mp3`
        poster_master_play.src=`img/${index}.jpg`;
        masterPlay.classList.add("bi-pause-fill")
        masterPlay.classList.remove("bi-play-fill")
        
        let songTitles=songs.filter((els)=> {
            // if(els.id==index){
                //     return els
            // }
            return els.id==index;
        })
   
        songTitles.forEach((elss) => {
            // let song=elss.songName
            // title.innerHTML= song;
            let {songName}=elss;
            let {titlename}=elss;
            title.innerHTML= songName;
            download_music.setAttribute('download',titlename)
        })
        songs
        music.play()
        makeAllBackground();
        makeAllplays();
        if(index<9){
            Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
            Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
        }
    else{
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[parseFloat(index)+11].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[parseFloat(index)+11].classList.add('bi-pause-circle-fill');
    }
}

const repeat_music=()=>{
    index;
    music.src=`audio/${index}.mp3`
    poster_master_play.src=`img/${index}.jpg`;
    masterPlay.classList.add("bi-pause-fill")
    masterPlay.classList.remove("bi-play-fill")
    
    let songTitles=songs.filter((els)=> {
        // if(els.id==index){
            //     return els
            // }
            return els.id==index;
        })
        
        songTitles.forEach((elss) => {
            // let song=elss.songName
            // title.innerHTML= song;
            let {songName}=elss;
            let {titlename}=elss;
            title.innerHTML= songName;
            download_music.setAttribute('download',titlename)
        })
        songs
        music.play()
        makeAllBackground();
        makeAllplays();
        if(index<9){
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
    }
    else{
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[parseFloat(index)+11].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[parseFloat(index)+11].classList.add('bi-pause-circle-fill');
    }
    }
    
    const random_music=()=>{
        if(index==songs.length-(songs.length-8)/2){
            index=1;
        }
        else{
            index= Math.floor((Math.random()*(songs.length-(songs.length-8)/2))+1)
        }
        music.src=`audio/${index}.mp3`
        poster_master_play.src=`img/${index}.jpg`;
        masterPlay.classList.add("bi-pause-fill")
        masterPlay.classList.remove("bi-play-fill")
        
        let songTitles=songs.filter((els)=> {
            // if(els.id==index){
                //     return els
                // }
            return els.id==index;
        })
        
        songTitles.forEach((elss) => {
            // let song=elss.songName
            // title.innerHTML= song;
            let {songName}=elss;
            let {titlename}=elss;
            title.innerHTML= songName;
            download_music.setAttribute('download',titlename)
        })
        songs
        music.play()
        makeAllBackground();
        makeAllplays();
        if(index<9){
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
    }
    else{
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[index-1].classList.add('bi-pause-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[parseFloat(index)+11].classList.remove('bi-play-circle-fill');
        Array.from(document.getElementsByClassName('playlistplay'))[parseFloat(index)+11].classList.add('bi-pause-circle-fill');
    }
}

music.addEventListener('ended',()=>
    {
        let b=shuffle.innerHTML;
        switch (b) {
            case 'repeat':
                repeat_music()
                break;
            case 'Next':
                next_music()
                break;
            case 'random':
                random_music()
                break;
        }
    })

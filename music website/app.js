console.log("welcome to music website page");
// using the addclick event listner we have to mam=ke the buttons move from left to right
//control the buttons using the id
let pop_songs_left=document.getElementById("pop_songs_left");
let pop_songs_right=document.getElementById("pop_songs_right");
let popsongs=document.getElementsByClassName("popsongs")[0];

//it is on the popular songs class

//using add event listner left arrow
pop_songs_right.addEventListener("click",()=>{
    popsongs.scrollLeft += 330;
});

// //left arrow
pop_songs_left.addEventListener("click",()=>{
    popsongs.scrollLeft -= 330;
});

//it is done on the popular artist songs class
//create the variables using id's
let pop_artist_left=document.getElementById("pop_artist_left");
let pop_artist_right=document.getElementById("pop_artist_right");
let Items=document.getElementsByClassName("Items")[0];

//add event listner 
pop_artist_left.addEventListener("click",()=>{
    Items.scrollLeft -= 330;

});

//right arrow
pop_artist_right.addEventListener("click",()=>{
    Items.scrollLeft += 330;
});


/************************************************************/
// to play the music we have to create the music object
const music = new Audio('');
//music.play();
//when we play the music ,it should the poster and artist name
//we have to create array 
const songs=[
    {id:1,
    songname:`Nee Kallu Neeli Samudram <br>
    <div class="subtitle">Devi Sri Prasad</div>`,

    poster:"img/1.jpg",
    },

    {id:1,
        songname:`Nee Kallu Neeli Samudram <br>
        <div class="subtitle">Devi Sri Prasad</div>`,
    
        poster:"img/1.jpg",
        },

    {id:2,
            songname:`Shailaja shailaja <br>
            <div class="subtitle">Devi Sri Prasad</div>`,
        
            poster:"img/2.jpg",
            },  
    
    {id:3,
    songname:`Samajaga varagamana <br>
    <div class="subtitle">Thaman</div>`,       
     poster:"img/3.jpg",
     },  
     
    {id:4,
        songname:`I Wanna Fly <br>
        <div class="subtitle">Hipop Tamiza</div>`,       
         poster:"img/4.jpg",
         },
    
    {id:5,
            songname:`Chinnadana Neekosam <br>
            <div class="subtitle">Krishna Chaithnaya</div>`,       
             poster:"img/5.jpg",
     },


     {id:6,
        songname:`Oye..Oye.. <br>
        <div class="subtitle">Manisharama</div>`,       
         poster:"img/6.jpg",
         },


    {id:7,
            songname:`Jigelu Rani <br>
            <div class="subtitle">Devi Sri Prasad</div>`,       
             poster:"img/7.jpeg",
             },

    {id:8,
                songname:`Nenani Neevani <br>
                <div class="subtitle">Micky J Mayer</div>`,       
                 poster:"img/8.jpg",
                 },
    
    {id:9,
     songname:`Gajjulu Gjallumanaye <br>
     <div class="subtitle">Rp patnayak</div>`,       
      poster:"img/9.jpg",
       },
                     
    {id:10,
        songname:`barbie dorasani <br>
        <div class="subtitle">Devi sri Prasad</div>`,       
         poster:"img/10.jpg",
     }, 
     
    {id:11,
        songname:`O priya <br>
        <div class="subtitle">Chandra Mohan</div>`,       
         poster:"img/11.jpg",
     },


    {id:12,
        songname:`Chitti<br>
        <div class="subtitle">jathiratnalu</div>`,       
         poster:"img/12.png",
         },
         
    {id:13,
            songname:`Oke pariksahi raasina oke <br>
            <div class="subtitle">Devi Sri Prasad</div>`,       
             poster:"img/13.jpeg",
       },


    {id:14,
        songname:`Prema Deshapu YuvaRani <br>
        <div class="subtitle">Manisharama</div>`,       
         poster:"img/14.jpeg",
         },

    {id:15,
            songname:`Saami Saami <br>
            <div class="subtitle">Devi Sri Prasad</div>`,       
             poster:"img/15.jpg",
     },

    {id:16,
        songname:`Ninnele <br>
        <div class="subtitle">Justin Prabhakaran</div>`,       
         poster:"img/16.jpeg",
         },

    {id:17,
            songname:`Naa Yadalo Chote Adagvadhu <br>
            <div class="subtitle">Yuvaan Shankar</div>`,       
             poster:"img/17.jpg",
             },

    {id:18,
                songname:`Nanne Nanne chusthu<br>
                <div class="subtitle">Venkatesh</div>`,       
                 poster:"img/18.jpg",
    },


    {id:19,
        songname:`Chamka chamka chamki rey <br>
        <div class="subtitle">DSP(Devi Sri Prasad)</div>`,       
         poster:"img/19.jpeg",
         },

    {id:20,
            songname:`why this kolaveri the<br>
            <div class="subtitle">Dhanush</div>`,       
             poster:"img/20.jpg",
             },

     {id:21,
                songname:`HOli Holi <br>
                <div class="subtitle">Hesham Abdul Wahab</div>`,       
                 poster:"img/21.jpeg",
     },


     {id:22,
        songname:`Killi Killi <br>
        <div class="subtitle">Mani Sharma</div>`,       
         poster:"img/22.jpg",
         },

    {id:23,
            songname:`Panjaa <br>
            <div class="subtitle"> Yuvan Shankar Raja</div>`,       
             poster:"img/23.jpg",
             },

     {id:24,
                songname:`Jaramochindhi <br>
                <div class="subtitle">Devi Sri Prasad</div>`,       
                 poster:"img/24.jpg",
                 },

     {id:25,
                    songname:`Mira Mira Messam <br>
                    <div class="subtitle">Anup Rubens</div>`,       
                     poster:"img/25.jpg",
      },

      {id:26,
        songname:`Maguva Maguva<br>
        <div class="subtitle">Thaman S</div>`,       
         poster:"img/26.webp",
         },

    {id:27,
            songname:`Aradugula Bullet <br>
            <div class="subtitle">Devi Sri Prasad</div>`,       
             poster:"img/27.jpg",
             },

     {id:28,
                songname:`Lala Bheemla<br>
                <div class="subtitle">Thaman S</div>`,       
                 poster:"img/28.webp",
     },

     {id:29,
        songname:`Akassam Ammayaithe <br>
        <div class="subtitle">Devi Sri Prasad</div>`,       
         poster:"img/29.jpg",
         },

    {id:30,
            songname:`Gelupu Thalupule <br>
            <div class="subtitle">Mani Sharma</div>`,       
             poster:"img/30.jpg",
     },

     {id:31,
        songname:`Travelling Solider <br>
        <div class="subtitle">Ramana Gogula</div>`,       
         poster:"img/31.jpg",
         },

    {id:32,
            songname:`Naalo Nuvvuvoka <br>
            <div class="subtitle">Ramana Gogula</div>`,       
             poster:"img/32.jpg",
             },

    {id:33,
                songname:`Ye Mera jahaa <br>
                <div class="subtitle">Devi Sri Prasad</div>`,       
                 poster:"img/33.webp",
     },

     {id:34,
        songname:`Jalsa Jalsa <br>
        <div class="subtitle">Devi Sri Prasadr</div>`,       
         poster:"img/34.jpeg",
         }

]

// creating an array on the  class on the     .....songsitem.....
Array.from(document.getElementsByClassName('songitem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songname;

})

// now we start the paly button
let playbutton=document.getElementById('playbutton');
let musicwave=document.getElementById('musicwave');
//when clicking the paly button it should play the song using the event listenre
playbutton.addEventListener('click',()=>{
    if (music.paused || music.currentTime<=0) {
        //  music.play();
        musicwave.classList.add('active1');
        //when the user play it changes to pause button
        //first remove the play fill button
        playbutton.classList.add('bi-pause-circle-fill');
        playbutton.classList.remove('bi-play-fill');
        
    } else {
        music.pause();
        musicwave.classList.remove('active1') ;
        playbutton.classList.add('bi-play-fill');
        playbutton.classList.remove('bi-pause-circle-fill');
       
    }
    
})


/****************************************************/
//create the function when music back ground changes,when the opacity is 0 and 1 
//it should be play when we click on the target music
//tageting the class on  song item for the background change
const makeallbackgroud=() => {
    //we get from array
    Array.from(document.getElementsByClassName('songitem')).forEach((e)=>{
        e.style.background='rgb(105, 105, 170,.0)';

    })
}

//when we play the music it should change the paly buttons
//so we have to create the function
const makeplay=() => {
    //we get from array
    Array.from(document.getElementsByClassName('playlsitplay')).forEach((e)=>{
        e.classList.remove('bi-pause-circle-fill');
        e.classList.add('bi-play-fill');

    })
}








// when we hit any of the album it should be play and have to show the index of song id
//take variable
let index = 0;

//for changing the poster when the song plays
let poster_img=document.getElementById('posterformasterply');

//target the title in the psoterformasterplay
let title=document.getElementById('title');
//create an array
Array.from(document.getElementsByClassName('playlsitplay')).forEach((e)=>{
    e.addEventListener('click',(e1)=>{
        index = e1.target.id;
        // console.log('index');
        //when we click any song it should play song with id
        //for that we have change the song src 
        music.src=`audio/${index}.mp3`;
        //change the poster when it clicked any song
        poster_img.src=`img/${index}.jpg`;
        music.play();
        playbutton.classList.add('bi-pause-circle-fill');
        playbutton.classList.remove('bi-play-fill');


        //it plays the song when it matches the id,it filters the song
        //create an array for songtitle
        //filter the array from the songs array
    
        let songtitle = songs.filter((ele) =>{
            return ele.id == index;

        });

        // to get the song name using songtitle
         songtitle.forEach(elem=>{
         let{songname,poster}=elem;
         title.innerHTML=songname;
         //we can add the poster here also
         poster_img.src=poster;
        });
       

        //call the funtion for the background change
        makeallbackgroud();
        Array.from(document.getElementsByClassName('songitem'))[index-1].style.background='rgb(105, 105, 170,.1)';//for opacity change

       //call the makeplay function
       makeplay();
       e1.target.classList.remove('bi-play-fill');
       e1.target.classList.add('bi-pause-circle-fill');
       musicwave.classList.add('active1');
    });
})

//here we have to create the seekbar for the id 
//current start time and end time
let currentstarttime=document.getElementById('currentstarttime');
let currentendtime=document.getElementById('currentendtime');
let seek=document.getElementById('bar');
let bar2=document.getElementById('bar2');
let dot=document.getElementById('dot');


//updating the time we have to use the eventlistener
music.addEventListener('timeupdate',()=>{
    //let check the current time
    let current_time=music.currentTime;
    //console.log(current_time);//it gets the time
    let current_dur=music.duration;
    //console.log(current_dur);

    //to convert duration into min
    //for that we  use the math floor
    let min=Math.floor(current_dur / 60);
    //for converting into sec
    let sec=Math.floor(current_dur % 60);
    //console.log(min);

    //adding the zero to time ,beacuse it is showing the single digit
    if(sec < 10){
        sec =`0${sec}`;
    }

    //now we target on the current end time
    currentendtime.innerText=`${min}:${sec}`;


    //it the time when it starts 
    let min1=Math.floor(current_time / 60);
    let sec1=Math.floor(current_time % 60);

    if(sec1 < 10){
        sec1 =`0${sec1}`;
    }

    currentstarttime.innerText=`${min1}:${sec1}`;

    //seekbar :that chahes with the run of the current time
    //using the target it
    //converting the current time and duration to parseint
    let progressbar=parseInt((current_time/current_dur)*100);
    seek.value=progressbar;//get into a variable
    let seekbar=seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

//for changing the seekbar we use the change event listener
seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration/100;
});


/*now we target on the volume button so we could change the volume regarding to the user user*/

let volumeicon = document.getElementById('vol_icon');
let volume = document.getElementById('volume');
let volumebar= document.getElementById('volbar');
let volumedot=document.getElementById('voldot');

//target to input id for volume
volume.addEventListener('change',()=>{
    if(volume.value == 0){
        volumeicon.classList.remove('bi-volume-up-fill');//high
        volumeicon.classList.remove('bi-volume-down-fill');//low volume or down 
        volumeicon.classList.add('bi-volume-mute-fill');//mut the volume
    }

    //second condition
    if(volume.value > 0){
        volumeicon.classList.remove('bi-volume-up-fill');//high
        volumeicon.classList.add('bi-volume-down-fill');//low volume or down 
        volumeicon.classList.remove('bi-volume-mute-fill');//mut the volume
    }
   
    if(volume.value > 50){
        volumeicon.classList.add('bi-volume-up-fill');//high
        volumeicon.classList.remove('bi-volume-down-fill');//low volume or down 
        volumeicon.classList.remove('bi-volume-mute-fill');//mut the volume
    }

    let volume_a=volume.value;
    volumebar.style.width=`${volume_a}%`;
    volumedot.style.left=`${volume_a}%`;
     
    music.volume=volume_a / 100;

});


//previous and forward button
let back=document.getElementById('back');
let next=document.getElementById('next');

//event listenre
back.addEventListener('click',()=>{
    index-=1;

  //we apply the conditon if the index value less than 1
  //we target with the class name
  if(index < 1){
    index=Array.from(document.getElementById('songitem')).length;
  }


    music.src=`audio/${index}.mp3`;
    //change the poster when it clicked any song
    poster_img.src=`img/${index}.jpg`;
    music.play();
    playbutton.classList.add('bi-pause-circle-fill');
    playbutton.classList.remove('bi-play-fill');


    //it plays the song when it matches the id,it filters the song
    //create an array for songtitle
    //filter the array from the songs array

    let songtitle = songs.filter((ele) =>{
        return ele.id == index;

    });

    // to get the song name using songtitle
     songtitle.forEach(elem=>{
     let{songname,poster}=elem;
     title.innerHTML=songname;
     //we can add the poster here also
     poster_img.src=poster;
    });
   

    //call the funtion for the background change
    makeallbackgroud();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background='rgb(105, 105, 170,.1)';//for opacity change

   //call the makeplay function
   makeplay();
  
   musicwave.classList.add('active1');
});





next.addEventListener('click',()=>{
    index ++;

    music.src=`audio/${index}.mp3`;
    //change the poster when it clicked any song
    poster_img.src=`img/${index}.jpg`;
    music.play();
    playbutton.classList.add('bi-pause-circle-fill');
    playbutton.classList.remove('bi-play-fill');


    //it plays the song when it matches the id,it filters the song
    //create an array for songtitle
    //filter the array from the songs array

    let songtitle = songs.filter((ele) =>{
        return ele.id == index;

    });

    // to get the song name using songtitle
     songtitle.forEach(elem=>{
     let{songname,poster}=elem;
     title.innerHTML=songname;
     //we can add the poster here also
     poster_img.src=poster;
    });
   

    //call the funtion for the background change
    makeallbackgroud();
    Array.from(document.getElementsByClassName('songitem'))[index-1].style.background='rgb(105, 105, 170,.1)';//for opacity change

   //call the makeplay function
   makeplay();

   musicwave.classList.add('active1');
});


//now we target on the shuffle of the music player
























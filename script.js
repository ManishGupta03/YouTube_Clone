const videoCardContainer = document.querySelector('.video-container');
const loadMore = document.querySelector('.load-more')
let api_key = "AIzaSyAKlqH_cVbUmKvBTdJzvLFCrDlx2MXE1IY";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";
// let search_Key = "AIzaSyBM1_C40cespNthMdFZHgn6-6VwZ8X4mlo";
const sideBar = document.getElementById("side-bar");
const sidebar_menu_items = document.getElementsByClassName("links");
const toggle_btn = document.getElementById("toggle-btn");
const fiters = document.getElementById("filters");


const toggleColorModeButton = document.getElementById("toggle_color");
toggleColorModeButton.addEventListener("click", toggleColorMode);






var expanded = true;
let str = `<div class="side-bar-menu-items-collapsed">
    <div class="img svgi "id="change1">
        <svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg>
    </div>
    <div class="collapsed-side-bar-menu-items-title">Home</div>
    // <div id=show12></div>
</div>    
<div class="side-bar-menu-items-collapsed">
    <div class="img svgi "id="change2">
        <svg height="18" viewBox="0 0 24 24" width="18" focusable="false" style="pointer-events: none; display: block; width: 100%; height:100%;"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg>
    </div>
    <div class="collapsed-side-bar-menu-items-title">Shorts</div>
</div> 
<div class="side-bar-menu-items-collapsed">
    <div class="img svgi "id="change3">
        <svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg>
    </div>
    <div class="collapsed-side-bar-menu-items-title">Subscriptions</div>
</div> 
<div class="side-bar-menu-items-collapsed">
    <div class="img svgi "id="change4">
        <svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path></svg>                        </div>
        <div class="collapsed-side-bar-menu-items-title">Library</div>
    </div> 
</div>`
toggle_btn.addEventListener("click", expand_collapse_sidebar);
function sideBar_changer(state) {
    for (let i = 0; i < sidebar_menu_items.length; i++) {
        const element = sidebar_menu_items[i];
        element.style.display = state;
        if (state === "block") element.style.display = "flex";
    }
}

// const change1 = document.getElementById("change1");
// console.log(change1);
// const show12= document.getElementById("show12");//calling the container to show the data
// change1.addEventListener("click",show1);

// function show1(){
//     show12.innerHTML=` <div><a href="https://www.youtube.com/" class="links"
//     ><img src="images/explore.PNG" alt="" />explore</a
//   >
//   <a href="https://www.youtube.com/" class="links"
//     ><img src="images/subscription.PNG" alt="" />subscription</a
//   >
//   <hr class="seperator" />
//   <a href="https://www.youtube.com/" class="links"
//     ><img src="images/photo-film-solid.svg" alt="" />library</a
//   >
//   <a href="https://www.youtube.com/" class="links"
//     ><img src="images/clock-rotate-left-solid.svg" alt="" />history</a
//   >
//   <a href="https://www.youtube.com/" class="links"
//     ><img src="images/circle-play-solid.svg" alt="" />your video</a
//   >
//   <a href="https://www.youtube.com/" class="links"
//     ><img src="images/clock-solid.svg" alt="" />watch leater</a
//   >
//   <a href="https://www.youtube.com/" class="links"
//     ><img src="images/thumbs-up-solid.svg" alt="" />like video</a
//   >
//   <hr class="seperator" />
//   <a href="https://www.youtube.com/" class="links"
//     ><img src="images/person-breastfeeding-solid.svg" alt="" />Trending</a
//   >
//   <a href="https://www.youtube.com/" class="links"
//     ><img src="images/bag-shopping-solid.svg" alt="" />Shopping</a
//   ></div>`;
// }

function changeVideoStyle(size) {
    const videos = document.getElementsByClassName("video");
    const videos_img = document.getElementsByClassName("thumbnail");

    for (let i = 0; i < videos.length; i++) {
        const vid = videos[i];
        const img = videos_img[i];
        vid.style.width = size;
        img.style.width = size;
    }
}




// function borderBottom(color){
//     for(let i = 0; i < 6; i++){
//         let cont = document.querySelector(`.side-bar-section-${i+1}`);
//         cont.style.borderBottom = `1px solid ${color}`;
//         cont.style.width = "100%";
//         // cont.style
//     }
// }



const collapsed = document.createElement("div");
collapsed.id = "collapsed";
collapsed.className = "collapsed";
collapsed.innerHTML = str;
function expand_collapse_sidebar() {
    if (!expanded) {
        sideBar.style.width = "15vw";
        expanded = true;
        if (document.getElementById("collapsed")) collapsed.remove();
        sideBar_changer("block");

        videoCardContainer.style.width = "70vw";
        videoCardContainer.style.left = "45vw";
        videoCardContainer.style.justifyContent = "center";
        fiters.style.width = "84vw"
        fiters.style.left = "25vw";
        // document.querySelector(".side-bar-section-2").style.borderBottom = "none";
        // borderBottom("#303030");
        videoCardContainer.style.gridTemplateColumns = "repeat(4, 1fr)"
        changeVideoStyle("23vw");

    } else if (expanded) {
        sideBar.style.width = "6vw"
        expanded = false;
        sideBar.appendChild(collapsed);
        sideBar_changer("none");
        // sidebar_menu_items.display = "none";
        videoCardContainer.style.width = "93vw";
        videoCardContainer.style.left = "6vw";
        fiters.style.width = "92vw"
        fiters.style.left = "6vw";
        // borderBottom("transparent");
        videoCardContainer.style.gridTemplateColumns = "repeat(4, 1fr)"
        changeVideoStyle("20vw");

    }
}




function fetchAPI() {
    fetch(video_http + new URLSearchParams({//"https://www.googleapis.com/youtube/v3/videos?
        key: api_key,
        part: ['snippet', 'contentDetails', 'statistics'],
        chart: 'mostPopular',
        maxResults: 50,
        regionCode: 'IN'
    }))
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.items.forEach(item => {
                getChannelIcon(item);
            })
        })
        .catch(err => console.log(err));
}
fetchAPI();

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
        .then(res => res.json())
        .then(data => {
            video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            makeVideoCard(video_data);
        })
}

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" >
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" onclick="changePage1()" alt="">
        <div class="content" >
            <img src="${data.channelThumbnail}" class="channel-icon" onclick="changePage2()"  alt="" >
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}

function changePage1() {
    window.location.href = 'http://127.0.0.1:5503/video-page/index.html';
}
function changePage2() {
    window.location.href = 'http://127.0.0.1:5503/ChannelPage/index.html';
}
loadMore.addEventListener("click", fetchAPI);

//window.location.href = 'https://youtube.com/watch?v=${data.id}'
// / const channel = document.querySelector('channel-icon')
// channel.addEventListener("click",openWebpage);











// const searchInput = document.querySelector('.search-bar');
// const searchBtn = document.querySelector('.search-btn');
// // let searchLink = "https://www.youtube.com/results?search_query=";
// let searchLink = "https://www.googleapis.com/youtube/v3/search?i=${api_key}&part=snippet&q=${searchInput.value}&type=channel,video,playlist&maxResults=20";

// searchBtn.addEventListener('click', () => {
//     if(searchInput.value.length){
//         // window.location.href = searchLink+searchInput.value;
//         window.location.href = searchLink;
//     }
// })





// ZoomIn and zoomOut
// const zoomInButton = document.getElementById("in");
// const zoomOutButton = document.getElementById("out");


// pageZoomIn and pageZoomOut
// const pageZoomInButton = document.getElementById("pzi");
// const pageZoomOutButton = document.getElementById("pzo");


// Page Zoom In
// pageZoomInButton.addEventListener("click", () => {
//   const currentZoom = parseFloat(document.body.style.zoom) || 1;
//   const newZoom = currentZoom * 1.1;
//   document.body.style.zoom = newZoom;
// });

// Page Zoom Out
// pageZoomOutButton.addEventListener("click", () => {
//   const currentZoom = parseFloat(document.body.style.zoom) || 1;
//   const newZoom = currentZoom / 1.1;
//   document.body.style.zoom = newZoom;
// });


// Zoom In for Current Cell
// zoomInButton.addEventListener("click", () => {
//     const currentFontSize = parseFloat(window.getComputedStyle(currentCell, null).getPropertyValue('font-size'));
//     currentCell.style.fontSize = currentFontSize * 1.2 + 'px';
//     updateMatrix(currentCell);
//   });
  
//   Zoom Out for Current Cell
//   zoomOutButton.addEventListener("click", () => {
//     const currentFontSize = parseFloat(window.getComputedStyle(currentCell, null).getPropertyValue('font-size'));
//     currentCell.style.fontSize = currentFontSize / 1.2 + 'px';
//     updateMatrix(currentCell);
//   });






// const menuIcon = document.querySelector(".openbtn");
// const sidebar = document.querySelector(".sidebar");

// menuIcon.onclick = function(){
//   sidebar.classList.toggle("small-sidebar");
// }
// function openWebpage() {
//     // Set the new URL to open in the same tab
//     window.location.href = "http://127.0.0.1:5503/ChannelPage/index.html";
//   }











const search = document.getElementById("search-bar");
const search_btn = document.querySelector("#image")
const search_result = document.getElementById("search-btn");
let clicked = false;
search_btn.addEventListener("click", () => {
    search.value = '';
    search_btn.style.display = "none";
    clicked = false;
})
search.addEventListener("click", () => {
    if (!clicked && search.value.length > 0) {
        search_btn.style.display = "block";
        clicked = true;
    }
    else if (clicked) {
        search_btn.style.display = "none";
        clicked = false;
    }
});
async function fetchSearchResult() {
    videoCardContainer.innerHTML = '';
    const apiKey = `AIzaSyBM1_C40cespNthMdFZHgn6-6VwZ8X4mlo`;
    const search_url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${search.value}&type=channel,video,playlist&maxResults=50`;
    let response = await fetch(search_url);
    let search_values = await response.json();
    // console.log(video_suggestions);
    console.log(search_values);
    for (let i = 0; i < search_values.items.length; i++) {    //i-> 0 1 2 3 4 (const i in search_values.items)
        makeSearchAlive(search_values.items[i]);
    }

}
search_result.addEventListener("click", fetchSearchResult);

async function makeSearchAlive(videos) {
    const apiKey = `AIzaSyBM1_C40cespNthMdFZHgn6-6VwZ8X4mlo`;
    let my_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videos.id.videoId}&key=${apiKey}`
    let response = await fetch(my_url);
    let data = await response.json();
    // for (const i in data.items) {
    //     makeSearchAlive(data.items[i]);
    // }
    for (let i = 0; i < data.items.length; i++) {
        const element = data.items[i];
        getChannelIcon(element);
    }
}


// async function getChanelIcon(video_info){
//     console.log(video_info);
//     let response = await fetch(channel_http + new URLSearchParams({
//         key: apiKey,
//         part: 'snippet',
//         id: video_info.snippet.channelId
//     }));
//     let data = await response.json();
//     video_info.channel_Thumbnail = data.items[0].snippet.thumbnails.default.url;
//     makeVideoCard(video_info);

// }




// const API_KEY = 'AIzaSyBM1_C40cespNthMdFZHgn6-6VwZ8X4mlo';

// document.getElementById('search-btn').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const query = document.getElementById('search-bar').value;
//     searchYouTube(query);
// });

// function searchYouTube(query) {
//     const endpoint = 'https://www.googleapis.com/youtube/v3/search';
//     const params = {
//         part: 'snippet',
//         type: 'video',
//         q: query,
//         key: API_KEY,
//     };

//     const url = `${endpoint}?${new URLSearchParams(params)}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => displayResults(data.items))
//         .catch(error => console.error('Error:', error));
// }

// function displayResults(videos) {
//     // const resultsContainer = document.getElementById('videoCardContainer');
//     videoCardContainer.innerHTML = '';

//     videos.forEach(video => {
//         const videoTitle = video.snippet.title;
//         const videoId = video.id.videoId;
//         const videoThumbnail = video.snippet.thumbnails.default.url;

//         const resultItem = document.createElement('div');
//         resultItem.innerHTML = `
//             <h2>${videoTitle}</h2>
//             <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
//         `;

//         videoCardContainer.appendChild(resultItem);
//     });
// }




let darkMode = false;


function toggleColorMode() {
    if (darkMode) {
        // Switch to light mode
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
        // Adjust other element colors as needed

        darkMode = false;
    } else {
        // Switch to dark mode
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#ffffff";
        // Adjust other element colors as needed

        darkMode = true;
    }
}










import { useState } from 'react';
import "./style.css"


function Square({ value, onSquareClick }) {
  return (<button className="square" onClick={onSquareClick}>{value}</button>);
}


function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i])  return;
     const nextSquares = squares.slice();
    if (xIsNext)  nextSquares[i] = 'X';
    else  nextSquares[i] = 'O';
    onPlay(nextSquares);
  }


  const winner = calculateWinner(squares);
  let status;
  if (winner) status = 'Winner: ' + winner;
  else status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  


  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];


  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }


  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }


  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });


  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}







let apiKey = "AIzaSyDkdM3unWrxoKQqlqIn2ZfxApeE38sCRVw";
let videos = "https://www.googleapis.com/youtube/v3/videos?";
let channel = "https://www.googleapis.com/youtube/v3/channels?";


// function fetchAPI() {
//   fetch(
//     videos +
//     new URLSearchParams({
//       key: apiKey,
//       part: "snippet",
//       chart: "mostPopular",
//       maxResults: 20,
//       regionCode: "IN",
//     })
//   )
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       document.querySelector(".channel-video").style.src = ``
//     })
//     .catch((err) => console.log(err));
// }

// fetchAPI();


//let apiKey = "AIzaSyDkdM3unWrxoKQqlqIn2ZfxApeE38sCRVw";

window.addEventListener("load", () => {
  //logic for rendering yt video
  let videoId = "5oH9Nr3bKfw";
  if (YT) {
    new YT.Player('video-container', {
      // height:"300",
      // width:"500",
      videoId,
    })
  }
});


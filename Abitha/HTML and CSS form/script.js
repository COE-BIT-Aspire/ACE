var navLinks = document.querySelectorAll(".topnav a");
var originalContent = document.getElementById("right-container").innerHTML;

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (navLink) {
      navLink.classList.remove("active");
    });
    this.classList.add("active");

    if (!this.classList.contains("contact")) {
      document.getElementById("right-container").innerHTML = originalContent;
      attachEventListeners();
    }
  });
});

function attachEventListeners() {
  var leftItems = document.querySelectorAll(".left-item");

  leftItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      var content = this.getAttribute("data-content");

      if (content === "Songs") {
        document.getElementById("scroll-content").innerHTML = `
          <h2 style="color: white;margin-left: 30px;margin-top: 30px;">Listen to latest the songs..!</h2>
          <div id="songList"></div>
        `;
        displaySongs(0);
      } else if (content === "Podcast") {
        document.getElementById("scroll-content").innerHTML = `
          <h2 style="color: white;margin-left: 30px;margin-top: 30px;">Listen to your favourite podcasts..!</h2>
          <div id="podcastList"></div>
        `;
        displayPodcasts(0);
      } else if (content === "Contact") {
        document.getElementById("scroll-content").innerHTML = `
                
    <link rel="stylesheet" href="contact_form.css">
    <form>
    <div class="cont">
        <div class="form sign-in">
            <h2 style="color:white">Contact Us</h2>
            <label>
                <span>Name</span>
                <input type="text"  required>
            </label>
            <label>
                <span>Email</span>
                <input type="email"  required>
            </label>
            <label>
                <span>Contact Number</span>
                <input type="number"  required>
            </label>
            <label>
                <span>Message</span>
                <input type="text"  required>
            </label> 
            <button type="submit" class="submit" formaction="home.html">Submit</button>
        </div>
    </div>
</form>
<div class="footer">
<span>Legal</span><span>Safety and Privacy Center</span><span>Privacy Policy</span><span>Cookies</span><span>About Ads</span><span>Accessibility</span><span>Jobs</span><span>Investors</span><span>Vendors</span>
</div>
<hr>
<div class="foot">Enjoy Listening @ My Music</div>


        `;
      }
    });
  });
}

function displaySongs(startIndex) {
  const songListElement = document.getElementById("songList");
  songListElement.innerHTML = "";
  const endIndex = songs.length;
  for (let i = startIndex; i < endIndex; i++) {
    const songName = songs[i].name;
    const songImagePath = songs[i].imagePath;
    // const songPath = songs[i].path;

    const songRow = document.createElement("div");
    songRow.classList.add("songRow");

    const songImage = document.createElement("img");
    songImage.src = songImagePath;
    songImage.alt = songName;
    songImage.classList.add("songImage");
    songImage.addEventListener("click", () => playSong(i));
    songRow.appendChild(songImage);

    const songItem = document.createElement("div");
    songItem.textContent = songName;
    songItem.classList.add("songName");
    songItem.addEventListener("click", () => playSong(i));
    songRow.appendChild(songItem);

    songListElement.appendChild(songRow);
  }
}

function displayPodcasts(startIndex) {
  const podcastListElement = document.getElementById("podcastList");
  podcastListElement.innerHTML = "";
  const endIndex = podcasts.length;
  for (let i = startIndex; i < endIndex; i++) {
    const podcastName = podcasts[i].name;
    const podcastImagePath = podcasts[i].imagePath;

    const podcastRow = document.createElement("div");
    podcastRow.classList.add("podcastRow");

    const podcastImage = document.createElement("img");
    podcastImage.src = podcastImagePath;
    podcastImage.alt = podcastName;
    podcastImage.classList.add("podcastImage");
    podcastImage.addEventListener("click", () => playPodcast(i)); // Adding click listener to the image
    podcastRow.appendChild(podcastImage);

    const podcastItem = document.createElement("div");
    podcastItem.textContent = podcastName;
    podcastItem.classList.add("podcastName");
    podcastItem.addEventListener("click", () => playPodcast(i)); // Adding click listener to the podcast name
    podcastRow.appendChild(podcastItem);

    podcastListElement.appendChild(podcastRow);
  }
}

function playPodcast(index) {
  currentIndex = index;
  audioPlayer.src = podcasts[index].path;
  audioPlayer.load();
}

function playSong(index) {
  currentIndex = index;
  audioPlayer.src = songs[index].path;
  audioPlayer.load();
}

document.getElementById("playPauseButton").addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});

document.getElementById("previousButton").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  playSong(currentIndex);
});

document.getElementById("nextButton").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  playSong(currentIndex);
});

displaySongs(0);

audioPlayer.addEventListener("loadeddata", () => {
  audioPlayer.play();
});

attachEventListeners();

/* ==========================================================================
   NETFLIX CLONE - HOME & BROWSE LOGIC (browse.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Populate Home Page Sliders
  const trendingTrack = document.getElementById("trending-track");
  const top10Track = document.getElementById("top10-track");
  const actionTrack = document.getElementById("action-track");
  const popularTrack = document.getElementById("popular-track");

  if (trendingTrack) {
    const trendingMovies = MOVIES_DATABASE.slice(0, 8);
    trendingTrack.innerHTML = trendingMovies.map(movie => createMovieCardHTML(movie)).join("");
  }

  if (top10Track) {
    const top10Movies = MOVIES_DATABASE.filter(m => m.isTop10).sort((a,b) => (a.topRank || 0) - (b.topRank || 0));
    top10Track.innerHTML = top10Movies.map(movie => createMovieCardHTML(movie, true)).join("");
  }

  if (actionTrack) {
    const actionMovies = MOVIES_DATABASE.filter(m => m.genre.includes("Action") || m.genre.includes("Thriller") || m.genre.includes("Cyberpunk"));
    actionTrack.innerHTML = actionMovies.map(movie => createMovieCardHTML(movie)).join("");
  }

  if (popularTrack) {
    const popularMovies = MOVIES_DATABASE.filter(m => m.genre.includes("Drama") || m.genre.includes("Fantasy") || m.genre.includes("Comedy") || m.genre.includes("Bollywood"));
    popularTrack.innerHTML = popularMovies.map(movie => createMovieCardHTML(movie)).join("");
  }

  // Active Profile Rendering
  const activeProfile = getCurrentProfile();
  const avatarImgs = document.querySelectorAll(".avatar-img");
  avatarImgs.forEach(img => {
    if (img && activeProfile.avatar) img.src = activeProfile.avatar;
  });
  const profileNameSpan = document.getElementById("nav-profile-name");
  if (profileNameSpan) profileNameSpan.textContent = activeProfile.name;

  // Header Scroll Transition
  const header = document.querySelector(".netflix-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Circular Linked List Carousel Engine (1-Movie Step Smooth Slide)
  const sliderContainers = document.querySelectorAll(".slider-container");
  sliderContainers.forEach(container => {
    const track = container.querySelector(".slider-track");
    const btnLeft = container.querySelector(".slider-btn-left");
    const btnRight = container.querySelector(".slider-btn-right");

    if (track && btnRight) {
      btnRight.addEventListener("click", () => {
        slideNextMovieCircular(track);
      });
    }

    if (track && btnLeft) {
      btnLeft.addEventListener("click", () => {
        slidePrevMovieCircular(track);
      });
    }
  });

  // Search Input Enter Redirect
  const searchInputs = document.querySelectorAll(".search-input");
  searchInputs.forEach(input => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && input.value.trim() !== "") {
        window.location.href = `search.html?q=${encodeURIComponent(input.value.trim())}`;
      }
    });
  });
});

// PURE CIRCULAR LINKED LIST SLIDE (HEAD -> TAIL)
function slideNextMovieCircular(track) {
  if (!track || track.children.length === 0 || track.dataset.animating === "true") return;
  track.dataset.animating = "true";

  const headCard = track.firstElementChild;
  const cardWidth = headCard.getBoundingClientRect().width + 12; // 1 movie width + gap

  // 1. Smooth hardware transition gliding left
  track.style.transition = "transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)";
  track.style.transform = `translateX(-${cardWidth}px)`;

  let completed = false;
  const finishTransition = () => {
    if (completed) return;
    completed = true;
    
    // 2. Move Head to Tail (Circular Linked List behavior)
    track.style.transition = "none";
    track.appendChild(headCard);
    track.style.transform = "translateX(0px)";

    // Force reflow
    void track.offsetHeight;
    track.dataset.animating = "false";
  };

  track.addEventListener("transitionend", finishTransition, { once: true });
  setTimeout(finishTransition, 460); // Safety fallback
}

// PURE CIRCULAR LINKED LIST REVERSE SLIDE (TAIL -> HEAD)
function slidePrevMovieCircular(track) {
  if (!track || track.children.length === 0 || track.dataset.animating === "true") return;
  track.dataset.animating = "true";

  const tailCard = track.lastElementChild;
  const cardWidth = tailCard.getBoundingClientRect().width + 12;

  // 1. Move Tail to Head instantly offscreen left
  track.style.transition = "none";
  track.insertBefore(tailCard, track.firstElementChild);
  track.style.transform = `translateX(-${cardWidth}px)`;
  
  // Force reflow
  void track.offsetHeight;

  // 2. Smoothly glide back to 0px
  track.style.transition = "transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)";
  track.style.transform = "translateX(0px)";

  let completed = false;
  const finishTransition = () => {
    if (completed) return;
    completed = true;
    track.style.transition = "none";
    track.dataset.animating = "false";
  };

  track.addEventListener("transitionend", finishTransition, { once: true });
  setTimeout(finishTransition, 460); // Safety fallback
}

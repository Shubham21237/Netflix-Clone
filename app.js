/* ==========================================================================
   NETFLIX CLONE - MASTER DATA, STATE & VIDEO ENGINE (app.js)
   ========================================================================== */

const NETFLIX_AVATARS = {
  shubham: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><rect width='160' height='160' fill='%23148f77' rx='12'/><circle cx='48' cy='64' r='8' fill='%23ffffff'/><circle cx='112' cy='64' r='8' fill='%23ffffff'/><path d='M 40 100 Q 80 130 120 100' stroke='%23ffffff' stroke-width='9' fill='none' stroke-linecap='round'/></svg>",
  kids: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><rect width='160' height='160' fill='%23e5b009' rx='12'/><circle cx='52' cy='60' r='10' fill='%23141414'/><circle cx='108' cy='60' r='10' fill='%23141414'/><path d='M 45 95 Q 80 135 115 95 Z' fill='%23141414'/><path d='M 60 102 Q 80 115 100 102' stroke='%23e50914' stroke-width='4' fill='none'/></svg>",
  guest: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><rect width='160' height='160' fill='%231e53e5' rx='12'/><circle cx='48' cy='64' r='8' fill='%23ffffff'/><circle cx='112' cy='64' r='8' fill='%23ffffff'/><path d='M 40 100 Q 80 130 120 100' stroke='%23ffffff' stroke-width='9' fill='none' stroke-linecap='round'/></svg>"
};

const SAMPLE_VIDEOS = {
  scifi: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  action: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  trailer: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  nature: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  fun: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
};

const MOVIES_DATABASE = [
  {
    id: "stranger-things",
    title: "Stranger Things 5",
    type: "series",
    rating: "16+",
    match: "99% Match",
    year: "2026",
    seasons: "5 Seasons",
    duration: "50m per ep",
    quality: "4K ULTRA HD",
    category: "trending",
    genre: ["Sci-Fi", "Horror", "Nostalgic"],
    poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80",
    videoUrl: SAMPLE_VIDEOS.scifi,
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl. Eleven and her friends unite to protect Hawkins from Vecna.",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder", "David Harbour"],
    director: "The Duffer Brothers",
    isTop10: true,
    topRank: 1
  },
  {
    id: "cyberpunk-2099",
    title: "Cyberpunk 2099",
    type: "movie",
    rating: "18+",
    match: "98% Match",
    year: "2026",
    duration: "2h 15m",
    quality: "HDR",
    category: "trending",
    genre: ["Action", "Sci-Fi", "Cyberpunk"],
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1920&q=80",
    videoUrl: SAMPLE_VIDEOS.action,
    description: "In a neon-drenched futuristic metropolis ruled by neural implants and mega-corporations, a rogue mercenary accepts a contract to retrieve an immortal AI prototype before the syndicate destroys it.",
    cast: ["Keanu Reeves", "Ana de Armas", "Idris Elba"],
    director: "Denis Villeneuve",
    isTop10: true,
    topRank: 2
  },
  {
    id: "interstellar-odyssey",
    title: "Interstellar Odyssey",
    type: "movie",
    rating: "13+",
    match: "96% Match",
    year: "2025",
    duration: "2h 45m",
    quality: "4K ULTRA HD",
    category: "sci-fi",
    genre: ["Sci-Fi", "Adventure", "Mind-Bending"],
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    videoUrl: SAMPLE_VIDEOS.scifi,
    description: "When Earth becomes uninhabitable, a team of ex-NASA astronauts travels through a newly discovered wormhole near Saturn in search of a new home for humanity.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    director: "Christopher Nolan",
    isTop10: true,
    topRank: 3
  },
  {
    id: "wednesday",
    title: "Wednesday: Season 2",
    type: "series",
    rating: "16+",
    match: "98% Match",
    year: "2025",
    seasons: "2 Seasons",
    quality: "4K ULTRA HD",
    category: "trending",
    genre: ["Horror", "Comedy", "Fantasy", "Mystery"],
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80",
    videoUrl: SAMPLE_VIDEOS.trailer,
    description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a monstrous murder spree while making new friends — and foes — at Nevermore Academy.",
    cast: ["Jenna Ortega", "Gwendoline Christie", "Christina Ricci"],
    director: "Tim Burton",
    isTop10: true,
    topRank: 4
  },
  {
    id: "squid-game",
    title: "Squid Game: The Challenge",
    type: "series",
    rating: "18+",
    match: "97% Match",
    year: "2025",
    seasons: "2 Seasons",
    quality: "4K ULTRA HD",
    category: "trending",
    genre: ["Thriller", "Drama", "Suspense"],
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1920&q=80",
    videoUrl: SAMPLE_VIDEOS.nature,
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon"],
    director: "Hwang Dong-hyuk",
    isTop10: true,
    topRank: 5
  },
  {
    id: "anime-chronicles",
    title: "Anime Chronicles: Valhalla",
    type: "series",
    rating: "16+",
    match: "97% Match",
    year: "2026",
    seasons: "3 Seasons",
    quality: "HD",
    category: "popular",
    genre: ["Anime", "Fantasy", "Action"],
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=80",
    videoUrl: SAMPLE_VIDEOS.fun,
    description: "A young warrior bound by an ancient mythical curse embarks on a quest across nine realms to reclaim their family honor and defeat mythical titans.",
    cast: ["Yuki Kaji", "Rie Takahashi", "Daisuke Ono"],
    director: "Shinsuke Sato",
    isTop10: false
  },
  {
    id: "dark-horizon",
    title: "Dark Horizon",
    type: "movie",
    rating: "18+",
    match: "94% Match",
    year: "2025",
    duration: "1h 58m",
    quality: "HD",
    category: "action",
    genre: ["Action", "Thriller", "Suspense"],
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1920&q=80",
    videoUrl: SAMPLE_VIDEOS.action,
    description: "Deep beneath the arctic sea, a naval submarine crew discovers an unknown biological entity that threatens global security.",
    cast: ["Tom Hardy", "Charlize Theron", "Michael B. Jordan"],
    director: "Ridley Scott",
    isTop10: false
  },
  {
    id: "money-heist",
    title: "Money Heist: Ultimate",
    type: "series",
    rating: "18+",
    match: "99% Match",
    year: "2024",
    seasons: "5 Seasons",
    quality: "4K ULTRA HD",
    category: "action",
    genre: ["Action", "Crime", "Suspense", "Thriller"],
    poster: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80",
    videoUrl: SAMPLE_VIDEOS.trailer,
    description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
    cast: ["Álvaro Morte", "Úrsula Corberó", "Pedro Alonso"],
    director: "Álex Pina",
    isTop10: false
  },
  {
    id: "lost-kingdom",
    title: "The Lost Kingdom",
    type: "movie",
    rating: "13+",
    match: "92% Match",
    year: "2024",
    duration: "2h 10m",
    quality: "HD",
    category: "popular",
    genre: ["Adventure", "Action", "Fantasy"],
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1920&q=80",
    videoUrl: SAMPLE_VIDEOS.action,
    description: "An intrepid archeologist discovers a subterranean civilization preserved for three millennia under the Sahara desert.",
    cast: ["Pedro Pascal", "Zendaya", "Oscar Isaac"],
    director: "Guillermo del Toro",
    isTop10: false
  },
  {
    id: "jawan",
    title: "Jawan: Director's Cut",
    type: "movie",
    rating: "16+",
    match: "99% Match",
    year: "2024",
    duration: "2h 49m",
    quality: "4K ULTRA HD",
    category: "action",
    genre: ["Action", "Thriller", "Bollywood"],
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1920&q=80",
    videoUrl: SAMPLE_VIDEOS.action,
    description: "A high-octane action thriller outlining the emotional journey of a man who is set to rectify the wrongs in society against an army of corrupt politicians.",
    cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi"],
    director: "Atlee",
    isTop10: false
  }
];

const STORAGE_KEYS = {
  MY_LIST: "netflix_clone_mylist",
  PROFILE: "netflix_clone_profile",
  USER: "netflix_clone_user",
  LANG: "netflix_clone_lang"
};

const TRANSLATIONS = {
  en: {
    heroTitle: "Unlimited movies, TV shows, and more",
    heroSub: "Watch anywhere. Cancel anytime.",
    ctaPrompt: "Ready to watch? Enter your email to create or restart your membership.",
    getStarted: "Get Started",
    signIn: "Sign In",
    signOut: "Sign out of Netflix",
    trendingTitle: "Trending Now",
    top10Title: "Top 10 Shows Today",
    actionTitle: "Action & Sci-Fi Blockbusters",
    myList: "My List",
    home: "Home",
    tvShows: "TV Shows",
    movies: "Movies",
    newPopular: "New & Popular",
    searchPlaceholder: "Search titles, genres, actors...",
    playBtn: "Play",
    moreInfoBtn: "More Info",
    questionsCall: "Questions? Call 1-800-012-3456",
    whosWatching: "Who's watching?",
    switchProfiles: "Switch Profiles"
  },
  hi: {
    heroTitle: "अनलिमिटेड फ़िल्में, टीवी शो और बहुत कुछ",
    heroSub: "कहीं भी देखें। कभी भी कैंसिल करें।",
    ctaPrompt: "देखने के लिए तैयार हैं? अपनी मेंबरशिप शुरू करने के लिए अपना ईमेल डालें।",
    getStarted: "शुरू करें",
    signIn: "साइन इन",
    signOut: "नेटफ्लिक्स से साइन आउट करें",
    trendingTitle: "इस समय ट्रेंडिंग",
    top10Title: "आज के टॉप 10 शो",
    actionTitle: "एक्शन और साइंस-फ़ाई फ़िल्में",
    myList: "मेरी लिस्ट",
    home: "होम",
    tvShows: "टीवी शो",
    movies: "फ़िल्में",
    newPopular: "नया और लोकप्रिय",
    searchPlaceholder: "टाइटल, जॉनर, अभिनेता खोजें...",
    playBtn: "चलाएं (Play)",
    moreInfoBtn: "ज़्यादा जानकारी",
    questionsCall: "कोई सवाल है? 1-800-012-3456 पर कॉल करें",
    whosWatching: "कौन देख रहा है?",
    switchProfiles: "प्रोफ़ाइल बदलें"
  }
};

function getLanguage() {
  return localStorage.getItem(STORAGE_KEYS.LANG) || "en";
}

function setLanguage(lang) {
  if (lang !== "en" && lang !== "hi") lang = "en";
  localStorage.setItem(STORAGE_KEYS.LANG, lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  
  document.querySelectorAll(".language-select").forEach(select => {
    select.value = lang;
  });

  document.querySelectorAll("[data-lang-key]").forEach(elem => {
    const key = elem.getAttribute("data-lang-key");
    if (dict[key]) {
      if (elem.tagName === "INPUT" && elem.hasAttribute("placeholder")) {
        elem.placeholder = dict[key];
      } else {
        elem.textContent = dict[key];
      }
    }
  });
}

function getMyList() {
  const saved = localStorage.getItem(STORAGE_KEYS.MY_LIST);
  return saved ? JSON.parse(saved) : ["stranger-things", "cyberpunk-2099", "wednesday", "squid-game"];
}

function addToMyList(movieId) {
  const list = getMyList();
  if (!list.includes(movieId)) {
    list.push(movieId);
    localStorage.setItem(STORAGE_KEYS.MY_LIST, JSON.stringify(list));
  }
}

function removeFromMyList(movieId) {
  const list = getMyList();
  const updated = list.filter(id => id !== movieId);
  localStorage.setItem(STORAGE_KEYS.MY_LIST, JSON.stringify(updated));
}

function isInMyList(movieId) {
  return getMyList().includes(movieId);
}

function toggleMyList(movieId) {
  if (isInMyList(movieId)) {
    removeFromMyList(movieId);
    return false;
  } else {
    addToMyList(movieId);
    return true;
  }
}

function getCurrentProfile() {
  const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
  return saved ? JSON.parse(saved) : {
    name: "Shubham",
    avatar: NETFLIX_AVATARS.shubham,
    isKids: false
  };
}

function setCurrentProfile(profile) {
  localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
}

// Create Movie Card HTML (Includes movie title on hover!)
function createMovieCardHTML(movie, isTop10 = false) {
  const inList = isInMyList(movie.id);

  if (isTop10) {
    return `
      <div class="top10-card" data-movie-id="${movie.id}">
        <span class="top10-number">${movie.topRank || 1}</span>
        <div class="movie-card">
          <div class="movie-card-inner">
            <img src="${movie.poster}" class="poster-img" alt="${movie.title}" loading="lazy">
          </div>
          <div class="card-hover-details">
            <div class="hover-actions">
              <div class="hover-btn-group">
                <button class="circle-btn circle-btn-play" onclick="event.stopPropagation(); playMovieVideo('${movie.id}')" title="Play Video">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
                <button class="circle-btn ${inList ? 'active' : ''}" onclick="event.stopPropagation(); handleListBtnClick(this, '${movie.id}')" title="Add to My List">
                  ${inList 
                    ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                    : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'
                  }
                </button>
              </div>
              <button class="circle-btn" onclick="openMovieModal('${movie.id}')" title="More Info">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
            <h4 class="hover-title">${movie.title}</h4>
            <div class="hover-meta">
              <span class="match-score">${movie.match}</span>
              <span class="badge badge-red">#${movie.topRank || 1} TODAY</span>
            </div>
            <div class="hover-tags">
              <span>${movie.genre.join(' • ')}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="movie-card" data-movie-id="${movie.id}">
      <div class="movie-card-inner">
        <img src="${movie.poster}" class="poster-img" alt="${movie.title}" loading="lazy">
      </div>
      <div class="card-hover-details">
        <div class="hover-actions">
          <div class="hover-btn-group">
            <button class="circle-btn circle-btn-play" onclick="event.stopPropagation(); playMovieVideo('${movie.id}')" title="Play Video">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </button>
            <button class="circle-btn ${inList ? 'active' : ''}" onclick="event.stopPropagation(); handleListBtnClick(this, '${movie.id}')" title="Add to My List">
              ${inList 
                ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'
              }
            </button>
          </div>
          <button class="circle-btn" onclick="openMovieModal('${movie.id}')" title="More Info">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>
        <h4 class="hover-title">${movie.title}</h4>
        <div class="hover-meta">
          <span class="match-score">${movie.match}</span>
          <span class="badge">${movie.rating}</span>
          <span class="badge badge-hd">${movie.quality}</span>
        </div>
        <div class="hover-tags">
          <span>${movie.genre.join(' • ')}</span>
        </div>
      </div>
    </div>
  `;
}

function handleListBtnClick(btnElement, movieId) {
  const added = toggleMyList(movieId);
  if (btnElement) {
    if (added) {
      btnElement.classList.add("active");
      btnElement.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    } else {
      btnElement.classList.remove("active");
      btnElement.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
    }
  }
  window.dispatchEvent(new Event("mylist_updated"));
}

function playMovieVideo(movieId) {
  const movie = MOVIES_DATABASE.find(m => m.id === movieId) || MOVIES_DATABASE[0];
  let playerOverlay = document.getElementById("global-video-player-modal");

  if (!playerOverlay) {
    playerOverlay = document.createElement("div");
    playerOverlay.id = "global-video-player-modal";
    playerOverlay.className = "video-player-overlay";
    document.body.appendChild(playerOverlay);
  }

  const videoSource = movie.videoUrl || SAMPLE_VIDEOS.scifi;

  playerOverlay.innerHTML = `
    <div class="video-player-container">
      <div class="video-player-header">
        <button class="video-back-btn" onclick="closeMovieVideo()" title="Back">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <div class="video-title-info">
          <h3>${movie.title}</h3>
          <span>Playing HD Trailer • ${movie.year} • ${movie.rating}</span>
        </div>
      </div>
      
      <video class="main-video-element" controls autoplay playsinline>
        <source src="${videoSource}" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    </div>
  `;

  playerOverlay.style.display = "flex";
  setTimeout(() => {
    playerOverlay.style.opacity = "1";
    const vid = playerOverlay.querySelector("video");
    if (vid) vid.play().catch(e => console.log("Autoplay notice:", e));
  }, 10);
}

function closeMovieVideo() {
  const playerOverlay = document.getElementById("global-video-player-modal");
  if (playerOverlay) {
    const vid = playerOverlay.querySelector("video");
    if (vid) vid.pause();
    playerOverlay.style.opacity = "0";
    setTimeout(() => {
      playerOverlay.style.display = "none";
      playerOverlay.innerHTML = "";
    }, 300);
  }
}

function openMovieModal(movieId) {
  const movie = MOVIES_DATABASE.find(m => m.id === movieId) || MOVIES_DATABASE[0];
  const modalOverlay = document.getElementById("global-movie-modal");
  if (!modalOverlay) return;

  const inList = isInMyList(movie.id);

  modalOverlay.innerHTML = `
    <div class="modal-container">
      <button class="modal-close-btn" onclick="closeMovieModal()">&times;</button>
      <div class="modal-hero">
        <img src="${movie.backdrop}" class="modal-hero-img" alt="${movie.title}">
        <div class="modal-hero-vignette"></div>
        <div class="modal-hero-content">
          <h2 class="modal-title">${movie.title}</h2>
          <div class="modal-hero-actions">
            <button class="btn-hero btn-play" onclick="playMovieVideo('${movie.id}')">
              <span class="btn-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></span> Play
            </button>
            <button class="circle-btn ${inList ? 'active' : ''}" onclick="handleModalListToggle('${movie.id}')" id="modal-list-btn">
              ${inList 
                ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'
              }
            </button>
          </div>
        </div>
      </div>
      <div class="modal-body">
        <div class="modal-main-info">
          <div class="modal-meta-row">
            <span class="match-score">${movie.match}</span>
            <span>${movie.year}</span>
            <span class="badge badge-red">${movie.rating}</span>
            <span>${movie.duration || movie.seasons}</span>
            <span class="badge badge-hd">${movie.quality}</span>
          </div>
          <p class="modal-synopsis">${movie.description}</p>
        </div>
        <div class="modal-side-info">
          <div class="info-group"><span class="info-label">Cast: </span><span class="info-val">${movie.cast.join(', ')}</span></div>
          <div class="info-group"><span class="info-label">Genres: </span><span class="info-val">${movie.genre.join(', ')}</span></div>
          <div class="info-group"><span class="info-label">Director: </span><span class="info-val">${movie.director || 'Netflix Originals'}</span></div>
        </div>
      </div>
    </div>
  `;

  modalOverlay.style.opacity = "1";
  modalOverlay.style.visibility = "visible";
  modalOverlay.style.pointerEvents = "auto";
}

function closeMovieModal() {
  const modalOverlay = document.getElementById("global-movie-modal");
  if (modalOverlay) {
    modalOverlay.style.opacity = "0";
    modalOverlay.style.visibility = "hidden";
    modalOverlay.style.pointerEvents = "none";
  }
}

function handleModalListToggle(movieId) {
  const added = toggleMyList(movieId);
  const btn = document.getElementById("modal-list-btn");
  if (btn) {
    btn.innerHTML = added 
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
    if (added) btn.classList.add("active"); else btn.classList.remove("active");
  }
  window.dispatchEvent(new Event("mylist_updated"));
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMovieModal();
    closeMovieVideo();
  }
});

document.addEventListener("click", (e) => {
  const modalOverlay = document.getElementById("global-movie-modal");
  if (modalOverlay && e.target === modalOverlay) {
    closeMovieModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const currentLang = getLanguage();
  applyLanguage(currentLang);

  document.querySelectorAll(".language-select").forEach(select => {
    select.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  });
});

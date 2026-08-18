/* ==========================================================================
   NETFLIX CLONE - SEARCH PAGE JS (search.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("page-search-input");
  const resultsGrid = document.getElementById("search-results-grid");
  const queryTitle = document.getElementById("search-query-title");
  const genrePills = document.querySelectorAll(".genre-pill");

  const urlParams = new URLSearchParams(window.location.search);
  const initialQuery = urlParams.get("q") || "";
  const initialGenre = urlParams.get("genre") || "All";

  if (searchInput) {
    searchInput.value = initialQuery;
  }

  if (initialGenre !== "All") {
    genrePills.forEach(pill => {
      if (pill.getAttribute("data-genre").toLowerCase() === initialGenre.toLowerCase()) {
        genrePills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
      }
    });
  }

  function renderSearchResults(query = "", selectedGenre = "All") {
    if (!resultsGrid) return;

    let filtered = MOVIES_DATABASE;

    if (query.trim() !== "") {
      const q = query.toLowerCase();
      filtered = filtered.filter(movie => 
        movie.title.toLowerCase().includes(q) ||
        movie.description.toLowerCase().includes(q) ||
        movie.genre.some(g => g.toLowerCase().includes(q)) ||
        movie.cast.some(c => c.toLowerCase().includes(q))
      );
    }

    if (selectedGenre !== "All") {
      filtered = filtered.filter(movie => 
        movie.genre.some(g => g.toLowerCase() === selectedGenre.toLowerCase())
      );
    }

    if (queryTitle) {
      if (query.trim() !== "") {
        queryTitle.textContent = `Search results for "${query}" (${filtered.length} found)`;
      } else if (selectedGenre !== "All") {
        queryTitle.textContent = `${selectedGenre} Titles (${filtered.length} found)`;
      } else {
        queryTitle.textContent = `Explore All Titles (${filtered.length} titles)`;
      }
    }

    if (filtered.length === 0) {
      resultsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0; color: #808080;">
          <h3 style="font-size: 1.5rem; color: #fff; margin-bottom: 10px;">Your search did not find any matches.</h3>
          <p>Suggestions: Try different keywords, or click on genre buttons above.</p>
        </div>
      `;
      return;
    }

    resultsGrid.innerHTML = filtered.map(movie => {
      const inList = isInMyList(movie.id);
      return `
        <div class="movie-card">
          <div class="movie-card-inner">
            <img src="${movie.poster}" class="poster-img" alt="${movie.title}" loading="lazy">
          </div>
          <div class="card-hover-details">
            <div class="hover-actions">
              <div class="hover-btn-group">
                <button class="circle-btn circle-btn-play" onclick="playMovieVideo('${movie.id}')" title="Play Video">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
                <button class="circle-btn ${inList ? 'active' : ''}" onclick="toggleMyListSearch('${movie.id}')" title="Add to My List">
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
    }).join("");
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activePill = document.querySelector(".genre-pill.active");
      const genre = activePill ? activePill.getAttribute("data-genre") : "All";
      renderSearchResults(e.target.value, genre);
    });
  }

  genrePills.forEach(pill => {
    pill.addEventListener("click", () => {
      genrePills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const genre = pill.getAttribute("data-genre");
      renderSearchResults(searchInput ? searchInput.value : "", genre);
    });
  });

  const activePill = document.querySelector(".genre-pill.active");
  const currentGenre = activePill ? activePill.getAttribute("data-genre") : "All";
  renderSearchResults(initialQuery, currentGenre);
});

function toggleMyListSearch(movieId) {
  toggleMyList(movieId);
  const searchInput = document.getElementById("page-search-input");
  const activePill = document.querySelector(".genre-pill.active");
  const genre = activePill ? activePill.getAttribute("data-genre") : "All";
  
  if (searchInput) {
    const event = new Event("input");
    searchInput.dispatchEvent(event);
  }
}

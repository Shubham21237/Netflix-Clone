/* ==========================================================================
   NETFLIX CLONE - PROFILE SELECTOR JS (profile.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const profileCards = document.querySelectorAll(".profile-card[data-profile-name]");

  profileCards.forEach(card => {
    card.addEventListener("click", () => {
      const name = card.getAttribute("data-profile-name");
      const avatar = card.getAttribute("data-profile-avatar");
      const isKids = card.getAttribute("data-is-kids") === "true";

      setCurrentProfile({
        name: name,
        avatar: avatar,
        isKids: isKids
      });

      window.location.href = "home.html";
    });
  });
});

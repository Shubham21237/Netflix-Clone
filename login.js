/* ==========================================================================
   NETFLIX CLONE - LOGIN & SIGNUP JS (login.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = loginForm.querySelector("input[type='text']");
      const passwordInput = loginForm.querySelector("input[type='password']");

      if (!emailInput.value || !passwordInput.value) {
        alert("Please enter a valid email and password.");
        return;
      }

      // Save dummy user session
      localStorage.setItem("netflix_clone_user", JSON.stringify({
        email: emailInput.value,
        loggedIn: true
      }));

      // Redirect to Profile Selection page
      window.location.href = "profile.html";
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = signupForm.querySelector("input[type='email']");
      const passwordInput = signupForm.querySelector("input[type='password']");

      if (!emailInput.value || !passwordInput.value) {
        alert("Please provide an email and password to create an account.");
        return;
      }

      localStorage.setItem("netflix_clone_user", JSON.stringify({
        email: emailInput.value,
        loggedIn: true
      }));

      window.location.href = "profile.html";
    });
  }
});

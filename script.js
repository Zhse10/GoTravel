document.addEventListener("DOMContentLoaded", () => {
  // LOGIN VALIDATION
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!username || !password) {
        alert("Please enter both username and password!");
      } else {
        alert(`Welcome back, ${username}!`);
        window.location.href = "home.html";
      }
    });
  }

  // BOOKING VALIDATION + CONFIRMATION
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const destination = document.getElementById("destination").value;
      const date = document.getElementById("date").value;

      if (!name || !email || !destination || !date) {
        alert("Please fill in all fields before submitting!");
      } else {
        alert(`Booking confirmed!\nName: ${name}\nDestination: ${destination}\nDate: ${date}`);
        bookingForm.reset();
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function() {

  // LOGIN VALIDATION WITH RED ERROR
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const username = document.getElementById("username");
      const password = document.getElementById("password");

      // Remove old error styles
      [username, password].forEach(input => input.classList.remove("input-error"));

      if (username.value.trim() === "" || password.value.trim() === "") {
        if (username.value.trim() === "") username.classList.add("input-error");
        if (password.value.trim() === "") password.classList.add("input-error");
        alert("Please fill in both Username and Password!");
      } else {
        alert("Login Successful! Welcome " + username.value + "!");
        window.location.href = "home.html";
      }
    });
  }

  // BOOKING VALIDATION WITH RED ERROR
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const fullname = document.getElementById("fullname");
      const email = document.getElementById("email");
      const destination = document.getElementById("destination");
      const date = document.getElementById("date");

      const fields = [fullname, email, destination, date];
      fields.forEach(f => f.classList.remove("input-error"));

      let invalid = false;
      fields.forEach(f => {
        if (f.value.trim() === "") {
          f.classList.add("input-error");
          invalid = true;
        }
      });

      if (invalid) {
        alert("Please complete all fields before booking!");
      } else {
        alert(`Booking Confirmed!\nName: ${fullname.value}\nDestination: ${destination.value}\nDate: ${date.value}`);
        bookingForm.reset();
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  const userEmailDisplay = document.getElementById('user-email');
  const logoutBtn = document.getElementById('logout-btn');

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      if (!user.emailVerified) {
        alert("Please verify your email before accessing the dashboard.");
        firebase.auth().signOut();
        window.location.href = "login.html";
      } else {
        userEmailDisplay.textContent = "Logged in as: " + user.email;
      }
    } else {
      window.location.href = "login.html";
    }
  });

  logoutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
      window.location.href = "login.html";
    });
  });
});

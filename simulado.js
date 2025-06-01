
document.addEventListener('DOMContentLoaded', () => {
  const auth = firebase.auth();
  const db = firebase.firestore();
  const logoutBtn = document.getElementById('logout-btn');
  const statusMessage = document.getElementById('status-message');

  auth.onAuthStateChanged(async user => {
    if (!user || !user.emailVerified) {
      window.location.href = "login.html";
      return;
    }

    const doc = await db.collection("usuarios").doc(user.uid).get();
    const plano = doc.exists ? doc.data().plano : "basic";

    if (plano === "adfree") {
      alert("O plano Ad-Free não inclui acesso a simulados completos.");
      window.location.href = "dashboard.html";
      return;
    }

    statusMessage.textContent = "Usuário: " + user.email;
  });

  logoutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
      window.location.href = "login.html";
    });
  });
});

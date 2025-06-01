
document.addEventListener('DOMContentLoaded', () => {
  const auth = firebase.auth();
  const db = firebase.firestore();
  const enunciado = document.getElementById('enunciado');
  const alternativas = document.getElementById('alternativas');
  const ads = document.getElementById('ads-container');
  const logoutBtn = document.getElementById('logout-btn');
  const nextBtn = document.getElementById('next-btn');

  auth.onAuthStateChanged(async user => {
    if (!user || !user.emailVerified) {
      window.location.href = "login.html";
      return;
    }

    const doc = await db.collection("usuarios").doc(user.uid).get();
    const plano = doc.exists ? doc.data().plano : "basic";

    if (plano === "basic") {
      ads.classList.remove("hidden");
    }

    // Simulação de questão
    enunciado.textContent = "Um paciente de 72 anos apresenta dispneia súbita e dor torácica. Qual é a hipótese diagnóstica mais provável?";
    alternativas.innerHTML = `
      <label class="block"><input type="radio" name="alt" /> Infarto agudo do miocárdio</label>
      <label class="block"><input type="radio" name="alt" /> Pneumotórax espontâneo</label>
      <label class="block"><input type="radio" name="alt" /> Tromboembolismo pulmonar</label>
      <label class="block"><input type="radio" name="alt" /> Derrame pleural</label>
    `;
  });

  logoutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
      window.location.href = "login.html";
    });
  });

  nextBtn.addEventListener('click', () => {
    // simulação de próxima questão
    window.location.reload();
  });
});

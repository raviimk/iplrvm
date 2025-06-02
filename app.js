document.addEventListener("DOMContentLoaded", () => {
  // Slot/Match Details Logic (original untouched)
  const matchDetails = document.getElementById("match-details");
  const friendCodes = document.getElementById("friend-codes");

  const sampleMatch = "CSK vs MI";
  const sampleFriends = ["Ravi", "Aman", "Jay", "Kunal", "Tushar", "Neel", "Ankit", "Manav"];
  const codes = ["C1", "C2", "C3", "C4", "M1", "M2", "M3", "M4"];

  if (matchDetails && friendCodes) {
    matchDetails.innerHTML = `<h2>${sampleMatch}</h2>`;
    friendCodes.innerHTML = "<ul>" + sampleFriends.map((f, i) => `<li>${f} → ${codes[i]}</li>`).join("") + "</ul>";
  }

  // Fix: Make login functions global
  window.openLogin = function () {
    const modal = document.getElementById("loginModal");
    if (modal) {
      modal.style.display = "flex";
    } else {
      console.error("Login modal not found.");
    }
  };

  window.closeLogin = function () {
    const modal = document.getElementById("loginModal");
    if (modal) {
      modal.style.display = "none";
    }
  };

  window.checkLogin = function () {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const msg = document.getElementById('loginMsg');

    if (user === 'RAVII' && pass === '3212') {
      msg.style.color = 'green';
      msg.innerText = 'Login successful!';
      setTimeout(() => {  
    window.location.href = "./dashboard.html";
    }, 1000);
  } else {
    msg.style.color = 'red';
    msg.innerText = 'REVA DENE MOTA KAM NYY TARU 😁';
  }
};
});

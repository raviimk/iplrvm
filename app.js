// Part 1: Existing Match Details Logic
document.addEventListener("DOMContentLoaded", () => {
  const matchDetails = document.getElementById("match-details");
  const friendCodes = document.getElementById("friend-codes");

  const sampleMatch = "CSK vs MI";
  const sampleFriends = ["Ravi", "Aman", "Jay", "Kunal", "Tushar", "Neel", "Ankit", "Manav"];
  const codes = ["C1", "C2", "C3", "C4", "M1", "M2", "M3", "M4"];

  matchDetails.innerHTML = `<h2>${sampleMatch}</h2>`;
  friendCodes.innerHTML = "<ul>" + sampleFriends.map((f, i) => `<li>${f} → ${codes[i]}</li>`).join("") + "</ul>";
});

// Part 2: Login Modal Logic
function openLogin() {
  document.getElementById('loginModal').style.display = 'flex';
}

function closeLogin() {
  document.getElementById('loginModal').style.display = 'none';
}

function checkLogin() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const msg = document.getElementById('loginMsg');

  function checkLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "RAVII" && password === "3212") {
    window.location.href = "dashboard.html";
  } else {
    alert("Galat username ya password!");
  }
}

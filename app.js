
document.addEventListener("DOMContentLoaded", () => {
  const matchDetails = document.getElementById("match-details");
  const friendCodes = document.getElementById("friend-codes");

  const sampleMatch = "CSK vs MI";
  const sampleFriends = ["Ravi", "Aman", "Jay", "Kunal", "Tushar", "Neel", "Ankit", "Manav"];
  const codes = ["C1", "C2", "C3", "C4", "M1", "M2", "M3", "M4"];

  matchDetails.innerHTML = `<h2>${sampleMatch}</h2>`;
  friendCodes.innerHTML = "<ul>" + sampleFriends.map((f, i) => `<li>${f} → ${codes[i]}</li>`).join("") + "</ul>";
});

function assignTeams() {
  const team1 = document.getElementById("team1").value.trim().toUpperCase();
  const team2 = document.getElementById("team2").value.trim().toUpperCase();

  if (!team1 || !team2) {
    alert("Enter both team names!");
    return;
  }

  const friendInputs = document.querySelectorAll("#friends input");
  const friendNames = [];

  friendInputs.forEach(input => {
    const name = input.value.trim();
    if (name) friendNames.push(name);
  });

  if (friendNames.length !== 8) {
    alert("Please enter exactly 8 friends.");
    return;
  }

  const shuffled = friendNames.sort(() => 0.5 - Math.random());
  const team1Members = shuffled.slice(0, 4);
  const team2Members = shuffled.slice(4);

  const result = [];
  let liveHTML = "";

  team1Members.forEach((name, i) => {
    const code = team1[0] + (i + 1);
    result.push(`${code} - ${name}`);
    liveHTML += `<div class='slot-card'>${code} - ${name}</div>`;
  });

  team2Members.forEach((name, i) => {
    const code = team2[0] + (i + 1);
    result.push(`${code} - ${name}`);
    liveHTML += `<div class='slot-card'>${code} - ${name}</div>`;
  });

  document.getElementById("resultContent").innerHTML = result.map(r => `<p>${r}</p>`).join("");
  document.getElementById("resultPopup").style.display = "block";
  document.getElementById("liveSlots").innerHTML = liveHTML;
}

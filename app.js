function assignTeams() {
  const t1 = document.getElementById("team1").value.trim().toUpperCase();
  const t2 = document.getElementById("team2").value.trim().toUpperCase();
  const inputs = document.querySelectorAll(".friend");

  let names = [];
  inputs.forEach(i => {
    if (i.value.trim() !== "") names.push(i.value.trim());
  });

  if (names.length !== 8 || !t1 || !t2) {
    alert("Enter both teams and 8 friend names.");
    return;
  }

  names = names.sort(() => 0.5 - Math.random());

  const team1Players = names.slice(0, 4);
  const team2Players = names.slice(4, 8);

  const popup = document.getElementById("popup");
  popup.style.display = "block";

  let html = `<h3>${t1} Team:</h3><ul>`;
  team1Players.forEach((n, i) => {
    html += `<li>${n} - ${t1.charAt(0)}${i + 1}</li>`;
  });
  html += `</ul><h3>${t2} Team:</h3><ul>`;
  team2Players.forEach((n, i) => {
    html += `<li>${n} - ${t2.charAt(0)}${i + 1}</li>`;
  });
  html += `</ul>`;

  popup.innerHTML = html;

  let final = [...team1Players.map((n, i) => `${n} (${t1.charAt(0)}${i + 1})`),
               ...team2Players.map((n, i) => `${n} (${t2.charAt(0)}${i + 1})`)];

  const output = document.getElementById("slotOutput");
  output.innerHTML = final.map((val, i) => `<div class='slot-card'>Slot ${i+1}: ${val}</div>`).join("");
}

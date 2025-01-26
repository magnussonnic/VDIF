const canvas = document.getElementById('football-pitch');
const ctx = canvas.getContext('2d');

// Rita planen
function drawPitch() {
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.strokeRect(50, 50, 400, 200); // Planens gränser

  ctx.beginPath(); // Mittlinjen
  ctx.moveTo(250, 50);
  ctx.lineTo(250, 250);
  ctx.stroke();

  ctx.beginPath(); // Mittcirkeln
  ctx.arc(250, 150, 30, 0, 2 * Math.PI);
  ctx.stroke();
}

// Lägg till klickhantering
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (x < 50 || x > 450 || y < 50 || y > 250) {
    alert("Skottet är utanför planens gränser!");
    return;
  }

  alert(`Skott registrerat på koordinat: (${x.toFixed(1)}, ${y.toFixed(1)})`);
});

drawPitch();

var mas;

export function drawField(ctx) {
  ctx.clearRect(0, 0, 300, 300);
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (mas[i][j] == 1) {
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
}

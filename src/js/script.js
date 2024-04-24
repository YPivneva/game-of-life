const canvas = document.getElementById("mainBoxId");
const ctx = canvas.getContext("2d");
var mas = [];
var count = 0;
var timer;

document.getElementById("mainBoxId").onclick = function (e) {
  let x = e.offsetX;
  let y = e.offsetY;
  x = Math.floor(x / 10);
  y = Math.floor(y / 10);
  mas[y][x] = 1;
  drawField();
};

function goLife() {
  let n = 30;
  let m = 30;
  for (let i = 0; i < m; i++) {
    mas[i] = [];
    for (let j = 0; j < n; j++) {
      mas[i][j] = 0;
      console.log(mas[i][j]);
    }
  }
}

goLife();

function drawField(ctx) {
  ctx.clearRect(0, 0, 300, 300);
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (mas[i][j] == 1) {
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
}

function startLife() {
  let mas2 = [];
  for (let i = 0; i < 30; i++) {
    mas2[i] = [];
    for (let j = 0; j < 30; j++) {
      let neighbors = 0;
      if (mas[fpm(i) - 1][j] == 1) neighbors++; //верх
      if (mas[i][fpp(j) + 1] == 1) neighbors++; //право
      if (mas[fpp(i) + 1][j] == 1) neighbors++; //низ
      if (mas[i][fpm(j) - 1] == 1) neighbors++; //лево
      if (mas[fpm(i) - 1][fpp(j) + 1] == 1) neighbors++; //право верх
      if (mas[fpp(i) + 1][fpp(j) + 1] == 1) neighbors++; //право низ
      if (mas[fpp(i) + 1][fpm(j) - 1] == 1) neighbors++; //лево низ
      if (mas[fpm(i) - 1][fpm(j) - 1] == 1) neighbors++; //лево верх
      neighbors === 2 || neighbors === 3 ? (mas2[i][j] = 1) : (mas2[i][j] = 0);
    }
  }
  mas = mas2;
  drawField();
  count++;
  document.getElementById("count").innerHTML = count;
  timer = setTimeout(startLife, 300);
}

function fpm(i) {
  if (i == 0) return 30;
  else return i;
}

function fpp(i) {
  if (i == 29) return -1;
  else return i;
}

function resetToDefault() {
  ctx.clearRect(0, 0, 300, 300);
  document.getElementById("count").innerHTML = 0;
  clearTimeout(timer);
}

document.getElementById("start").onclick = startLife;
document.getElementById("reset").onclick = resetToDefault;

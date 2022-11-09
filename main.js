const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

const voronoi = new Voronoi(12);

function main() {
  console.log("Hello world!");
  voronoi.draw();
}

window.addEventListener("load", main);

window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    voronoi.drawSeeds();
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === " ") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    voronoi.draw();
  }
});

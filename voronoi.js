class Voronoi {
  constructor(numSeeds) {
    this.seeds = this.generateSeeds(numSeeds);
  }

  generateSeeds(numSeeds) {
    const seeds = new Array(numSeeds);

    for (let i = 0; i < numSeeds; i++) {
      const x = random(0, canvas.width);
      const y = random(0, canvas.width);
      seeds[i] = new Point(x, y, randomColor());
    }

    return seeds;
  }

  // Move seeds randomly and slightly
  moveSeeds() {
    for (const seed of this.seeds) {
      seed.x += random(-1.2, 1.2);
      seed.y += random(-1.2, 1.2);

      // Do not go out of bounds
      if (seed.x < 0) seed.x = 0;
      if (seed.x > canvas.width) seed.x = canvas.width;
      if (seed.y < 0) seed.y = 0;
      if (seed.y > canvas.height) seed.y = canvas.height;
    }
  }

  drawCells(unit=1) {
    ctx.save();

    for (let x = 0; x < canvas.width; x += unit) {
      for (let y = 0; y < canvas.height; y += unit) {
        // For each pixel

        const p = new Point(x, y);

        let minDist = Infinity;
        let color = null;
        // Find nearest neighbour
        for (const seed of this.seeds) {
          const dist = p.dist(seed);
          if (dist < minDist) {
            minDist = dist;
            color = seed.color;
          }
        }

        ctx.fillStyle = `#${color}`;
        ctx.fillRect(x, y, unit, unit);
      }
    }

    ctx.restore()
  }

  drawSeeds() {
    ctx.save();
    for (const seed of this.seeds) {
      ctx.beginPath();
      ctx.arc(seed.x, seed.y, 3, 0, 2 * Math.PI);
      ctx.fill();
    }
    ctx.restore();
  }

  draw() {
    this.drawCells(0.5);
    this.drawSeeds();
  }
}

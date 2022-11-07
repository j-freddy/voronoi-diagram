class Point {
  constructor(x, y, color=null) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  dist(other) {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }
}

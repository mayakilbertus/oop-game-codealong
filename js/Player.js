class Player {
  constructor() {
    // initialize properties
    this.width = 20;
    this.height = 10;
    this.positionX = 50 - this.width / 2;
    this.positionY = 0;

    // dom manipulation to reflect initial values (size, position)
    this.playerElm = document.getElementById("player");
    this.playerElm.style.width = this.width + "vw";
    this.playerElm.style.height = this.height + "vh";
    this.playerElm.style.left = this.positionX + "vw";
    this.playerElm.style.bottom = this.positionY + "vh";
  }
  moveLeft() {
    this.positionX--;
    this.playerElm.style.left = this.positionX + "vw";
  }
  moveRight() {
    this.positionX++;
    this.playerElm.style.left = this.positionX + "vw";
  }
}

class Player {
  username = String;
  imageSrc = String;
  points = 0;
  hasPlayed = false;
  isCzar = false;

  constructor(username, imageSrc) {
    this.username = username;
    this.imageSrc = imageSrc;
  }

  getUsername(){return this.username};
  getPoints(){return this.points};
  getIsCzar(){return this.isCzar};
  getHasPlayed(){return this.hasPlayed};
  getImageSrc(){return this.imageSrc};


  setHasPlayed(hasPlayed) {
    this.hasPlayed = hasPlayed;
  }

  setUsername(username) {
    this.username = username;
  }

  setIsCzar(isCzar) {
    this.isCzar = isCzar;
  }

  setPoints(points) {
    this.points = points;
  }

  increasePoints(){
    this.points++;
  }
}
export default Player;

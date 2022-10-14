export class Person {
  constructor(data) {
    Object.assign(this, data);
  }

  handleLike() {
    this.hasBeenLiked = true;
    this.hasBeenSwiped = true;
    return this.setLikedHtml();
  }

  setLikedHtml() {
    return `<div class="like"><img class="like-img" src="./images/badge-like.png"/></div>`;
  }

  handleReject() {
    this.hasBeenSwiped = true;
    return this.setRejectHtml();
  }

  setRejectHtml() {
    return `<div class="nope"><img class="nope-img" src="./images/badge-nope.png"/></div>`;
  }

  setMainHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    return `
        <div class="container">
        <header>
            <div class="user"></div>
            <div class="account"></div>
            <div class="messages"></div>
        </header>
        <main>
            <img class="img-main" src="${avatar}" alt="photo of ${name}" />
            <h3 class="title-main">${name}, ${age}</h3>
            <h5 class="intro-main">${bio}</h5>
        </main>
        <footer>
            <button class="reject-btn" id="reject-btn" data-reject-btn="${name}">
            <img class="reject-btn-img" src="./images/icon-cross.png"/>
            </button>
            <button class="accept-btn" id="accept-btn" data-accept-btn="${name}"><img class="accept-btn-img" src="./images/icon-heart.png"/></button>
        </footer>
        </div>`;
  }
}

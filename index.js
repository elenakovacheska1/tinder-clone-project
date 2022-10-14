import { data } from "./data.js";
import { Person } from "./Person.js";

const getNextPerson = () => {
  return data.length ? new Person(data.shift()) : "";
};

const setNextPerson = () => {
  person = getNextPerson();
  if (person) {
    render();
  } else {
    document.body.innerHTML = "";
  }
};

let person = getNextPerson();

document.body.addEventListener("click", (event) => {
  if (person) {
    console.log(person);
    if (event.target.dataset.rejectBtn) {
      const nopeHtml = person.handleReject();
      renderSwipe(nopeHtml);
      setTimeout(() => {
        setNextPerson();
      }, 1000);
    } else if (event.target.dataset.acceptBtn) {
      const likeHtml = person.handleLike();
      renderSwipe(likeHtml);
      setTimeout(() => {
        setNextPerson();
      }, 1000);
    }
  } else {
    setTimeout(() => {
      document.body.innerHTML = "";
    }, 1000);
  }
});

const render = () => {
  const mainHtml = person.setMainHtml();
  document.body.innerHTML = "";
  document.body.innerHTML = mainHtml;
};

const renderSwipe = (html) => {
  document.querySelector("main").innerHTML += html;
};

render();

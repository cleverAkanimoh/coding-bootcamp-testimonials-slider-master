const slidesArray = [
  {
    image: "./images/image-tanya.jpg",
    name: "Tanya Sinclair",
    skill: "UX Engineer",
    quote:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
  },
  {
    image: "./images/image-john.jpg",
    name: " John Tarkpor",
    skill: " Junior Front-end Developer",
    quote:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”",
  },
  {
    image: "./images/image-tanya.jpg",
    name: "Tanya Sinclair",
    skill: "UX Engineer",
    quote:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
  },
  {
    image: "./images/image-john.jpg",
    name: " John Tarkpor",
    skill: " Junior Front-end Developer",
    quote:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”",
  },
];

let index = 0;

const container = document.getElementsByClassName("card")[0];
const previousButton = document.getElementsByClassName("slide-button")[0];
const nextButton = document.getElementsByClassName("slide-button")[1];
const totalSlideIndex = slidesArray.length - 1;
const intervalTime = 3000;

changeSlide();
const startAutoSlid = () => {
  moveSlideNext();
  changeSlide();
};
const interval = setInterval(() => startAutoSlid(), intervalTime);
const moveSlideNext = () => {
  index++; //   index = index + 1;
  if (index > totalSlideIndex) {
    index = 0;
  }
  changeSlide();
  setInterval(() => startAutoSlid(), intervalTime);
};
nextButton.onclick = moveSlideNext;

previousButton.onclick = () => {
  index--; // index = index-1
  if (index < 0) {
    index = totalSlideIndex;
  }
  clearInterval(interval);
  changeSlide();
};

function changeSlide() {
  const currentSlide = slidesArray[index];

  container.innerHTML = `<div class="image-button-wrapper">
          <img
            src=${currentSlide.image}
            alt=${currentSlide.name}
            class="image"
            id="profile-image"
          />

       

        <p>
          ${currentSlide.quote}
        </p>
        <div class="biography">
          <h5>${currentSlide.name}</h5>
          <small>${currentSlide.skill}</small>
        </div>`;
}

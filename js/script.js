


document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper without autoplay
  var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });

  // Custom 30-second autoplay effect
  setInterval(() => {
      let items = document.querySelectorAll('.item');
      if (items.length > 0) {
          document.querySelector('.slide').appendChild(items[0]); // Move the first item to the end
      }
  }, 3000); // 30000 ms = 30 seconds

  // Custom next and prev button functionality to maintain autoplay effect
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  next.addEventListener('click', function () {
      swiper.slideNext();
  });

  prev.addEventListener('click', function () {
      swiper.slidePrev();
  });
});





const slider = () =>{
    const sideBar = document.querySelector('.sideBar');
    const menuBar = document.querySelector('.menuBar');


    menuBar.addEventListener('click',() =>{
        sideBar.style.transform = "translateX(-5%)"
    })
}

const reverseSlider = () =>{
    const sideBar = document.querySelector('.sideBar');
    const cross = document.querySelector('.cross');


    cross.addEventListener('click',() =>{
        sideBar.style.transform = "translateX(100%)"
    })
}

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});






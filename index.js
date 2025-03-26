// 이미지 슬라이드 기능
const slideAlbums = document.querySelectorAll(".slide-album");

slideAlbums.forEach((album, index) => {
  let imgIndex = 0;
  let position = 0;
  const IMG_WIDTH = 530;
  const $slideImgs = album.querySelector(".slide-images");
  const $btnPrev = album.querySelector(".btn-prev");
  const $btnNext = album.querySelector(".btn-next");
  const TOTAL_IMAGES = $slideImgs.querySelectorAll("img").length;

  let prev = function () {
    if (imgIndex > 0) {
      position += IMG_WIDTH;
      $slideImgs.style.transform = `translateX(${position}px)`;
      imgIndex--;
      $btnNext.removeAttribute("disabled");
    }
    if (imgIndex === 0) {
      $btnPrev.setAttribute("disabled", "true");
    }
  };

  let next = function () {
    if (imgIndex < TOTAL_IMAGES - 1) {
      position -= IMG_WIDTH;
      $slideImgs.style.transform = `translateX(${position}px)`;
      $slideImgs.style.transition = "transform .5s ease-out";
      imgIndex++;
      $btnPrev.removeAttribute("disabled");
    }
    if (imgIndex === TOTAL_IMAGES - 1) {
      $btnNext.setAttribute("disabled", "true");
    }
  };

  let init = function () {
    $btnPrev.setAttribute("disabled", "true");
    $btnPrev.addEventListener("click", prev);
    $btnNext.addEventListener("click", next);
  };

  init();
});

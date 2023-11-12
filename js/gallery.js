document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("gallery-display");
    let modalImg = document.getElementById("gd-content");
    let closeModal = document.getElementById("close-gd");

    document.querySelectorAll(".gallery-wrapper > div > img").forEach((img) => {
      img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
      });
    });

    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });
  });
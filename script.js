// Gallery item filter

const filterButtons = document.querySelector("#filter-butts").children;
const items = document.querySelector(".projects-gallery").children;

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");

    for (let k = 0; k < items.length; k++) {
      items[k].style.display = "none";
      if (target == items[k].getAttribute("data-id")) {
        items[k].style.flex = "0 0 calc(33.33% - 5px)";
        items[k].style.maxWidth = "calc(33.33% - 5px)";
        items[k].style.display = "flex";
        items[k].style.flexWrap = "wrap";
        items[k].style.justifyContent = "space-between";
      }
      if (target == "all") {
        items[k].style.flex = "0 0 calc(33.33% - 5px)";
        items[k].style.maxWidth = "calc(33.33% - 5px)";
        items[k].style.display = "flex";
        items[k].style.flexWrap = "wrap";
        items[k].style.justifyContent = "space-between";
      }
    }
  });
}

// Modal

const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modalImage = modal.querySelector("img");

modal.addEventListener("click", function () {
  if (event.target != modalImage) {
    modal.classList.add("hide");
    modal.classList.remove("show");
  }
});

closeModal.addEventListener("click", function () {
  modal.classList.add("hide");
  modal.classList.remove("show");
});

const gallery = document.querySelector(".projects-gallery");
const galleryItem = gallery.querySelectorAll(".item");

galleryItem.forEach(function (element) {
  element
    .querySelector(".fa-search-plus")
    .addEventListener("click", function () {
      modal.classList.remove("hide");
      modal.classList.add("show");
      modalImage.src = element.querySelector("img").getAttribute("src");
      //   console.log(element.querySelector("img").getAttribute("src"));
    });
});

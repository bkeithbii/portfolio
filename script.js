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
    });
});

// Contact Form
$(document).ready(function () {
  $(".submit").click(function () {
    console.log("Clicked button");

    let name = $(".name").val();
    let email = $(".email").val();
    let message = $(".message").val();
    let status = $(".status");

    if (name.length >= 3) {
      status.append("<div>Name is valid</div>");
    } else {
      event.preventDefault();

      status.append("<div>Please provide a name</div>");
    }

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      status.append("<div>Email is valid</div>");
    } else {
      event.preventDefault();

      status.append("<div>Email invalid</div>");
    }

    if (message.length >= 20) {
      status.append("<div>Message is valid</div>");
    } else {
      event.preventDefault();

      status.append("<div>Message invalid</div>");
    }
  });
});

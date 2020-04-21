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

// Validation
function validation() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error_message = document.getElementById("error-message");
  let text;

  error_message.style.padding = "10px";

  if (name.length < 5) {
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if (message.length <= 60) {
    text = "Please Enter More Than 120 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Submitted Successfully!");

  return false;
}

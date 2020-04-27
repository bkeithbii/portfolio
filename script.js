// Gallery item filter

// const filterButtons = document.querySelector("#filter-butts").children;
// const items = document.querySelector(".projects-gallery").children;

// for (let i = 0; i < filterButtons.length; i++) {
//   filterButtons[i].addEventListener("click", function () {
//     for (let j = 0; j < filterButtons.length; j++) {
//       filterButtons[j].classList.remove("active");
//     }
//     this.classList.add("active");
//     const target = this.getAttribute("data-target");

//     for (let k = 0; k < items.length; k++) {
//       items[k].style.display = "none";
//       if (target == items[k].getAttribute("data-id")) {
//         // items[k].style.flex = "0 0 45%";
//         // items[k].style.maxWidth = "45%";
//         items[k].style.display = "flex";
//         items[k].style.flexDirection = "row";
//         items[k].style.justifyContent = "center";
//         // items[k].style.padding = "10px";
//       }
//       if (target == "all") {
//         items[k].style.display = "flex";
//         // items[k].style.flexWrap = "wrap";
//         items[k].style.flexDirection = "row";
//         items[k].style.justifyContent = "center";
//         items[k].style.height = "250px";
//         items[k].style.width = "300px";
//       }
//     }
//   });
// }

// Modal

// const closeModal = document.querySelector(".close-modal");
// const modal = document.querySelector(".modal");
// const modalImage = modal.querySelector("img");

// modal.addEventListener("click", function () {
//   if (event.target != modalImage) {
//     modal.classList.add("hide");
//     modal.classList.remove("show");
//   }
// });

// closeModal.addEventListener("click", function () {
//   modal.classList.add("hide");
//   modal.classList.remove("show");
// });

// const gallery = document.querySelector(".projects-gallery");
// const galleryItem = gallery.querySelectorAll(".item");

// galleryItem.forEach(function (element) {
//   element
//     .querySelector(".fa-search-plus")
//     .addEventListener("click", function () {
//       modal.classList.remove("hide");
//       modal.classList.add("show");
//       modalImage.src = element.querySelector("img").getAttribute("src");
//     });
// });

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

// Updating header functionality
window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
};

// Navbar links
const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a");

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active");
    }
    this.classList.add("active");
    document.querySelector(".navbar").classList.toggle("show");
  });
});

// Hamburger
const hamburger = document.querySelector(".ham-burger");

hamburger.addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("show");
});

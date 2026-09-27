const dialog = document.querySelector(".cart-dialog");
const cartCount = document.querySelector(".cart-count");
const addButtons = document.querySelectorAll("[data-add-to-cart]");
const cartButton = document.querySelector(".cart-button");

function openHalfCart() {
  cartCount.textContent = "½";
  cartButton.setAttribute("aria-label", "Warenkorb öffnen, ein halber Artikel");

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

addButtons.forEach((button) => button.addEventListener("click", openHalfCart));
cartButton.addEventListener("click", openHalfCart);

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector("#year").textContent = new Date().getFullYear();

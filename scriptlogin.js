// Login and sign Up page
const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
  });
});
document
  .getElementById("checkoutLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("Your order has been placed");
  });
document
  .getElementById("checkoutLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var rowDiv = document.querySelector(".row");
    var checkoutLink = document.getElementById("checkoutLink");

    var imageElement = document.createElement("img");
    imageElement.src = "Images/OrderPlaced.png";
    imageElement.alt = "Your Image Alt Text";
    rowDiv.innerHTML = "";
    rowDiv.appendChild(imageElement);
  });
//To clear everything
clearRowAndAddImage();

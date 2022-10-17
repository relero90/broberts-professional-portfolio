// https://dashboard.emailjs.com/admin/account
(function() {
  emailjs.init("-nVgwSSo7LJY0IG8O");
})();

window.onload = function() {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      emailjs.sendForm("portfolio_email", "portfolio_contact_form", this).then(
        function() {
          console.log("SUCCESS!");
          const feedbackP = document.createElement("p");
        },
        function(error) {
          console.log("FAILED...", error);
        }
      );
    });
};

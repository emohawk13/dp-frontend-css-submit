document
  .getElementById("reservationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href =
      "completedForm.html?" + new URLSearchParams(new FormData(event.target));
  });

const otherCheckbox = document.getElementById("other");
const otherTextArea = document.getElementById("other-text");
function toggleTextArea() {
  otherTextArea.disabled = !otherCheckbox.checked;
}
otherCheckbox.addEventListener("change", toggleTextArea);
toggleTextArea();

const checkboxes = document.querySelectorAll(".single-choice");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      checkboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

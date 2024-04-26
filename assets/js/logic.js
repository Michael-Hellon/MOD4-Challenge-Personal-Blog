// dark mode function
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
backButton.addEventListener("click", () => {
   window.location.href = "index.html"; // Navigate back to index.html
});
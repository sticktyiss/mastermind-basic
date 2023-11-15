const cSelect = document.getElementById("cSelect");
const Btns = document.getElementsByClassName("Btns");

console.log(Btns);
const toggleHidden = () => {
  if (cSelect.style.display === "none") {
    cSelect.style.display = "flex"
  } else {
    cSelect.style.display = "none"
  }
}
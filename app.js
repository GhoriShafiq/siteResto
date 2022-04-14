const header = document.querySelector("header");
window.addEventListener("scroll", (e) => {
  header.classList.toggle("scrolled", window.scrollY > 10);
  console.log(window.scrollY);
  // console.log(header);
  console.log(e);
  console.log(e.target.body.childNodes);
});

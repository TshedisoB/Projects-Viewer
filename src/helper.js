export default function hideHeaderSubtitle() {
  setTimeout(() => {
    document.querySelector(".header-subtitle").style.display = "none";
  }, 5000);
}

const openSidebar = document.getElementById("open-nav");
const sidebar = document.getElementById("sidebar");
openSidebar.addEventListener("click", (e) => {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
    sidebar.style.transform = "translateX(0)";
    sidebar.style.transition = "transform 0.5s ease";
  } else {
    sidebar.style.display = "none";
    sidebar.style.transform = "translateX(-100%)";
    sidebar.style.transition = "transform 0.5s ease";
  }
});
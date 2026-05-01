document.getElementById("year").textContent = new Date().getFullYear();

const items = document.querySelectorAll(".accordion-item");
items.forEach((item, index) => {
  const btn = item.querySelector(".accordion-btn");
  const content = item.querySelector(".accordion-content");

  if (index === 0) content.style.maxHeight = content.scrollHeight + "px";

  btn.addEventListener("click", () => {
    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    items.forEach(i => {
      i.querySelector(".accordion-content").style.maxHeight = "0px";
    });

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

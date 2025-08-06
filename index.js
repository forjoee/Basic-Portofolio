window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-image').forEach(el => {
    const img = el.getAttribute('data-img');
    if (img) {
      el.style.backgroundImage = `url('${img}')`;
    }
  });
});

const modal = document.getElementById("preview-modal");
const iframe = document.getElementById("modal-iframe");
const closeBtn = document.getElementById("close-modal");

document.querySelectorAll('.project-image').forEach(box => {
  box.addEventListener('click', () => {
    const url = box.getAttribute('data-url');
    if (!url) return;

    iframe.src = url;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  iframe.src = "";
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    iframe.src = '';
  }
});

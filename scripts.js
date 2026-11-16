function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = "none";
  if (!document.querySelector(".modal[style*='block']")) {
    document.body.style.overflow = "";
  }
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach((m) => (m.style.display = "none"));
  document.body.style.overflow = "";
}

// Close when clicking the dark backdrop
window.addEventListener("click", (e) => {
  if (e.target.classList && e.target.classList.contains("modal")) closeAllModals();
});

// Close with Escape; open cards with Enter/Space (keyboard access)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllModals();
  const card = e.target.closest && e.target.closest(".project-card");
  if (card && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    card.click();
  }
});
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = "block";
    } else {
      console.log("Modal not found:", id);
    }
  }
  
  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = "none";
    }
  }
  
  // close when clicking outside
  window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let modal of modals) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  };
// JavaScript ile resimleri büyütmek için bir fonksiyon
function showOverlay() {
    var overlay = document.querySelector('.overlay');
    var clickedImageSrc = imageElement.src; // Tıklanan resmin kaynağını alın
    var overlayImage = document.querySelector('.overlay img');
    overlayImage.src = clickedImageSrc; // Büyük resmi tıklanan resmin kaynağı olarak ayarlayın
    overlay.style.display = 'flex';
  }
  
  // Overlay kapatmak için fonksiyon
  function hideOverlay() {
    var overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
  }
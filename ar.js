// Script for AR-specific interactions
const hotspots = document.querySelectorAll('.Hotspot');
const banner = document.getElementById('banner');
const closeButton = document.getElementById('closeBanner');

// Show the banner when an hotspot is clicked
hotspots.forEach((hotspot, index) => {
  hotspot.addEventListener('click', () => {
    banner.style.display = 'block';
    const bannerTitle = banner.querySelector('h1');
    const bannerText = banner.querySelector('p');
    bannerTitle.textContent = `Hotspot ${index + 1}`;
    bannerText.textContent = `You clicked on Hotspot ${index + 1}`;
  });
});

// Close the banner
closeButton.addEventListener('click', () => {
  banner.style.display = 'none';
});

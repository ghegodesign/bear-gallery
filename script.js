// Funzione per mostrare il banner
const showBanner = (title, text) => {
  const banner = document.getElementById('banner');
  const bannerTitle = banner.querySelector('h1');
  const bannerText = banner.querySelector('p');

  // Impostiamo il contenuto del banner
  bannerTitle.textContent = title;
  bannerText.textContent = text;

  // Mostriamo il banner
  banner.style.display = 'flex';
};

// Funzione per chiudere il banner
const closeBanner = () => {
  const banner = document.getElementById('banner');
  banner.style.display = 'none';
};

// Aggiungi un ascoltatore di eventi per ogni hotspot
document.querySelectorAll('.Hotspot').forEach((hotspot, index) => {
  hotspot.addEventListener('touchstart', (event) => {
    // Prevenire l'eventuale comportamento predefinito
    event.preventDefault();

    // Mostra un banner personalizzato per ogni hotspot
    const title = `Hotspot ${index + 1}`; // Titolo dell'hotspot
    const text = `Questa è la descrizione del Hotspot ${index + 1}.`; // Testo del banner

    showBanner(title, text);
  });
});

// Aggiungi il comportamento per chiudere il banner
document.getElementById('closeBanner').addEventListener('click', closeBanner);

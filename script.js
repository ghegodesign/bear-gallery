// Gestisce il caricamento del progresso per <model-viewer>
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};

document.querySelector('model-viewer').addEventListener('progress', onProgress);

// Gestisce il comportamento degli hotspot e il banner
const hotspots = document.querySelectorAll('.Hotspot');
const banner = document.createElement('div');
banner.id = 'banner';
banner.style.display = 'none';
banner.innerHTML = `
  <div class="banner-content">
    <h1>Informazioni</h1>
    <p id="banner-text">Testo segnaposto per il banner.</p>
    <img id="closeBanner" src="close-icon.png" alt="Chiudi" />
  </div>
`;
document.body.appendChild(banner);

hotspots.forEach((hotspot, index) => {
  hotspot.addEventListener('click', () => {
    document.getElementById('banner-text').textContent = `Dettagli sull'hotspot ${index + 1}`;
    banner.style.display = 'flex';
  });
});

document.getElementById('closeBanner').addEventListener('click', () => {
  banner.style.display = 'none';
});

// Base script to handle model loading and hotspot setup
const modelViewer = document.querySelector('model-viewer');

// Event listener for loading progress
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
modelViewer.addEventListener('progress', onProgress);

// Handling the "View in your space" button for AR
const arButton = document.getElementById('ar-button');
arButton.addEventListener('click', () => {
  modelViewer.enterAR();
});

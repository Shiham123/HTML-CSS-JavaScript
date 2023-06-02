const btnEl = document.getElementById('btn'),
  galleryEl = document.getElementById('gallery'),
  errorMsgEl = document.getElementById('errorMessage'),
  inputEl = document.getElementById('input'),
  clearBtnEl = document.getElementById('clear-btn');

let perImgs = '';

btnEl.addEventListener('click', fetchingImages);

clearBtnEl.addEventListener('click', () => {
  perImgs = '';
  galleryEl.style.display = 'none';
});

async function fetchingImages() {
  const inputValue = inputEl.value;

  if (inputValue < 1 || inputValue > 10) {
    errorMsgEl.style.display = 'block';
    errorMsgEl.innerText = 'Number should be between 0 and 10';
    return;
  }

  try {
    btnEl.style.display = 'none';
    const loading = `<img src="spninner.svg"/>`;
    galleryEl.innerHTML = loading;

    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=JNbOVAmulJcbmC1Rr9cTAGiCE6qzbgq4zZh_zextlh0`
    ).then((response) =>
      response.json().then((data) => {
        if (data) {
          data.forEach((pic) => {
            btnEl.style.display = 'block';
            perImgs += `<img src=${pic.urls.full}/>`;
            galleryEl.style.display = 'block';
            galleryEl.innerHTML = perImgs;
          });
        }
      })
    );
  } catch (error) {
    console.log(error);
    errorMsgEl.style.display = 'block';
    errorMsgEl.innerText = 'An error showup, please fix the error';
  }
}

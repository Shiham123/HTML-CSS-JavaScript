const containerEl = document.querySelector('.container');

const jobArray = [
  'designer',
  'developer',
  'convertor',
  'full stack developer',
  'MERN stack developer',
  'MEAN stack developer',
];

let jobIndex = 0,
  characterIndex = 0;

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am a ${jobArray[jobIndex].slice(
    0,
    characterIndex
  )}</h1>`;

  if (characterIndex === jobArray[jobIndex].length) {
    jobIndex++;
    characterIndex = 0;
  }

  if (jobIndex === jobArray.length) {
    jobIndex = 0;
  }

  setTimeout(updateText, 100);
}

updateText();

const testimonial = [
  {
    name: 'Shiham',
    photoUrl: '/Img/279105393_3201597220099002_4487681873371122246_n.jpg',
    description: 'I am a developer people and i want to be a developer',
  },
  {
    name: 'Shiham Two',
    photoUrl: '/Img/279105393_3201597220099002_4487681873371122246_n.jpg',
    description:
      'I am a developer people and i want to be a developer and i AM a hard worker person',
  },
  {
    name: 'Shiham three',
    photoUrl: '/Img/279105393_3201597220099002_4487681873371122246_n.jpg',
    description: 'I am a and i AM a hard worker person',
  },
];

const imgElement = document.querySelector('img '),
  textElement = document.querySelector('.text'),
  userName = document.querySelector('.user');

let indexNumber = 0;
const updateSlider = () => {
  const { name, photoUrl, description } = testimonial[indexNumber];
  imgElement.src = photoUrl;
  textElement.innerText = description;
  userName.innerText = name;

  indexNumber++;

  if (indexNumber === testimonial.length) {
    indexNumber = 0;
  }

  setTimeout(() => {
    updateSlider();
  }, 1000);
};

updateSlider();

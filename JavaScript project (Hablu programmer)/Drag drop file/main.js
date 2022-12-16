const DragArea = document.getElementsByClassName('app-body')[0],
  DragText = DragArea.getElementsByTagName('h3')[0],
  button = DragArea.getElementsByTagName('button')[0],
  input = DragArea.getElementsByTagName('input')[0];
let Myfile;

button.onclick = () => {
  input.click();
};

input.addEventListener('change', function () {
  Myfile = this.files[0];
  DragArea.classList.add('active');
  ShowMe();
});

DragArea.addEventListener('dragover', function (event) {
  event.preventDefault();
  DragArea.classList.add('active');
  DragText.textContent = 'Release to Upload File';
});

DragArea.addEventListener('dragleave', function () {
  DragArea.classList.remove('active');
  DragText.textContent = 'Drag & Drop';
});

DragArea.addEventListener('drop', function (event) {
  event.preventDefault();
  Myfile = event.dataTransfer.files[0];
  ShowMe();
});

function ShowMe() {
  let filetype = Myfile.type;
  let validation = ['image/jpeg', 'image/jpg', 'image/png'];

  if (validation.includes(filetype)) {
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let imgUrl = fileReader.result;
      let img = `<img src="${imgUrl}" alt="">`;
      DragArea.innerHTML = img;
    };

    fileReader.readAsDataURL(Myfile);
  } else {
    alert('file is not valid');
    DragArea.classList.remove('active');
    DragText.textContent = 'Drag & Drop';
  }
}

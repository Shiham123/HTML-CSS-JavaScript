function isValidPhotoName(photoName, extension) {
  if (typeof photoName !== 'string' || !Array.isArray(extension)) {
    return 'please provide a valid inputs';
  } else {
    for (let item of extension) {
      if (photoName.toLowerCase().endsWith(item.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
}

const photo = 'img.jpg';
const extension = ['.jpg', '.jpeg', '.png', '.gif', '.ico'];
console.log(isValidPhotoName(photo, extension));

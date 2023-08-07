function isJavaScriptFile(fileName) {
  if (typeof fileName !== 'string') {
    return 'please provide me a string';
  } else {
    const arr = fileName.split('.');
    const lastElement = arr.pop();
    return lastElement.toLowerCase() === 'js';
  }
}

console.log(isJavaScriptFile('hello.world.bd.js'));

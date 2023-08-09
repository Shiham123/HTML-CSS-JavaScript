function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return 'please provide a meaning full string';
  } else {
    if (string1.toLowerCase().includes(string2.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }
}
matchFinder('John Doe', 'john');

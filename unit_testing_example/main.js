function greet(name) {
  if (Array.isArray(name)) {
    // Creation of a string containing all the names of the array
    let names = "";
    // Adding each name to the arrays of names
    name.forEach((element) => (names += `${element}, `));
    // Removing the last comma and space characters of the string
    names = names.substring(0, names.length - 2);
    return `Hello, ${names}!`;
  } else {
    if (name.length == 0) {
      return `Hello, there!`;
    } else if (name == name.toUpperCase()) {
      return `HELLO, ${name.toUpperCase()}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }
}


module.exports = greet;

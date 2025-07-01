// To load data

// On utilise le jsonplaceholder (google) : api test

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => console.log(data));

console.log("magnifique")
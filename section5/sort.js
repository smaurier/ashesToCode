const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 28 }
];


const peopleSorted = people.slice().sort((a, b) => a.age - b.age);
console.log(peopleSorted);
console.log(people)

// sort() mute l'array alors on utilise slice pour une copie
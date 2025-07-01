// map retourne un nouvelle array en appliquant une fonction à chaque élément d'un tableau

const x = [1,2,3,4,5].map((item) => item*2)
console.log(x)



const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

function formatUser(user) {
    return user.name.toUpperCase();
}

const allUsers = users.map(user => ({
    name: user.name,
    age: user.age,
    formatUser: formatUser(user)
}));

//const allUsers = users.map(user => ({ name: user.name, age: user.age }));

console.log(allUsers);
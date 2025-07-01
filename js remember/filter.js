const users = [
    { id: 1, name: "Alice", age: 25, active: true },
    { id: 2, name: "Bob", age: 30, active: false },
    { id: 3, name: "Charlie", age: 22, active: true },
    { id: 4, name: "Diana", age: 28, active: false }
];

const products = [
    { id: 101, name: "Laptop", price: 1200, inStock: true },
    { id: 102, name: "Phone", price: 800, inStock: false },
    { id: 103, name: "Tablet", price: 600, inStock: true }
];

const books = [
    { title: "1984", author: "George Orwell", year: 1949, available: true },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932, available: false },
    { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, available: true }
];

const userAged = users.filter((user) => user.age > 25).filter((user) => user.active !== true)
console.log(userAged)

const productInStock = products.filter((product) => product.inStock)
console.log(productInStock)

const availableBooks = books.filter((book) => book.available)
console.log(availableBooks)
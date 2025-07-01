const users = [
    {
        id: 1,
        name: "Alice",
        age: 28,
        posts: [
            { id: 101, title: "Hello World", likes: 10 },
            { id: 102, title: "Redux Rocks", likes: 5 }
        ]
    },
    {
        id: 2,
        name: "Bob",
        age: 34,
        posts: [
            { id: 103, title: "JavaScript Tips", likes: 8 },
            { id: 104, title: "React Patterns", likes: 12 }
        ]
    },
    {
        id: 3,
        name: "Charlie",
        age: 22,
        posts: [
            { id: 105, title: "Functional Programming", likes: 7 }
        ]
    }
];

const orders = [
    {
        orderId: "A001",
        customer: { id: 1, name: "Alice" },
        items: [
            { product: "Book", quantity: 2, price: 15 },
            { product: "Pen", quantity: 5, price: 2 }
        ],
        status: "shipped"
    },
    {
        orderId: "A002",
        customer: { id: 2, name: "Bob" },
        items: [
            { product: "Notebook", quantity: 3, price: 8 }
        ],
        status: "pending"
    }
];

const products = [
    {
        sku: "P100",
        name: "Laptop",
        categories: ["electronics", "computers"],
        stock: 10,
        reviews: [
            { userId: 1, rating: 5, comment: "Great!" },
            { userId: 3, rating: 4, comment: "Good value." }
        ]
    },
    {
        sku: "P200",
        name: "Headphones",
        categories: ["electronics", "audio"],
        stock: 25,
        reviews: [
            { userId: 2, rating: 3, comment: "Average." }
        ]
    }
];

const orderedQuantity = orders.reduce(
    (acc, order) =>
        acc +
        order.items.reduce((itemAcc, item) => itemAcc + item.quantity, 0),
    0
);
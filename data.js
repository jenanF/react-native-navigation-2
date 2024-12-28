const users = [
    { userId: 1, name: "jenan FS", email: "jenan@fullstack.com", password: "123456", image: '' },
    { userId: 2, name: "Sarah Lee", email: "sarah@example.com", password: "56893", image: '' },
    { userId: 3, name: "Michael Davis", email: "michael@example.com", password: "4389", image: '' },
    { userId: 4, name: "Olivia Smith", email: "olivia@example.com", password: "73829", image: '' },
    { userId: 5, name: "John Doe", email: "john@example.com", password: "82931", image: '' },
    { userId: 6, name: "Emily Chen", email: "emily@example.com", password: "72839", image: '' },
];



const items = [
    // Electronics
    {
        name: "Smartphone X5",
        price: 799,
        description: "A sleek, high-performance smartphone featuring a 6.5-inch OLED display, 128GB storage, and a 50MP camera.",
        category: "Electronics",
        creatorId: 1,
        id: 1
    },
    {
        name: "Wireless Noise Cancelling Headphones",
        price: 299,
        description: "Over-ear headphones with industry-leading noise cancellation, 20-hour battery life, and Bluetooth 5.0.",
        category: "Electronics",
        creatorId: 2,
        id: 2
    },
    {
        name: "4K Ultra HD Smart TV",
        price: 1199,
        description: "A 55-inch smart TV with crystal-clear 4K resolution, built-in Alexa, and streaming apps.",
        category: "Electronics",
        creatorId: 1,
        id: 3
    },
    {
        name: "Portable Power Bank 10,000mAh",
        price: 39.99,
        description: "A compact power bank capable of charging two devices simultaneously with quick charging technology.",
        category: "Electronics",
        creatorId: 3,
        id: 4
    },

    // Home Decor
    {
        name: "Eco-Friendly Bamboo Lamp",
        price: 89.99,
        description: "A modern lamp made of sustainably sourced bamboo, featuring a soft, warm LED light perfect for living rooms.",
        category: "Home Decor",
        creatorId: 4,
        id: 5
    },
    {
        name: "Velvet Throw Blanket",
        price: 59.99,
        description: "A luxurious, ultra-soft velvet blanket in a rich navy blue, perfect for cozying up on cool nights.",
        category: "Home Decor",
        creatorId: 3,
        id: 6
    },
    {
        name: "Handcrafted Ceramic Vase",
        price: 45,
        description: "A handmade, uniquely designed ceramic vase in matte white, perfect for displaying flowers or as a standalone accent.",
        category: "Home Decor",
        creatorId: 2,
        id: 7
    },
    {
        name: "Abstract Wall Art Print",
        price: 125,
        description: "A large, abstract print on high-quality canvas, bringing a touch of modern art to any living space.",
        category: "Home Decor",
        creatorId: 5,
        id: 8
    },

    // Fashion
    {
        name: "Leather Crossbody Bag",
        price: 120,
        description: "A handcrafted leather crossbody bag with adjustable straps and multiple compartments for convenience.",
        category: "Fashion",
        creatorId: 5,
        id: 9
    },
    {
        name: "Chunky Knit Sweater",
        price: 79.99,
        description: "A cozy, oversized sweater made from a wool blend, ideal for winter layering.",
        category: "Fashion",
        creatorId: 4,
        id: 10
    },
    {
        name: "High-Waisted Denim Jeans",
        price: 59.99,
        description: "Trendy high-waisted jeans made from soft, stretchy denim that offers comfort and style all day.",
        category: "Fashion",
        creatorId: 4,
        id: 11
    },
    {
        name: "Vintage Sunglasses",
        price: 45,
        description: "Retro-inspired sunglasses with UV protection and a bold, oversized frame for a statement look.",
        category: "Fashion",
        creatorId: 1,
        id: 12
    },

    // Fitness & Outdoor
    {
        name: "Adjustable Dumbbells Set",
        price: 150,
        description: "A set of adjustable dumbbells with weights ranging from 5 to 50 pounds, perfect for home workouts.",
        category: "Fitness & Outdoor",
        creatorId: 6,
        id: 13

    },
    {
        name: "Yoga Mat (Eco-Friendly)",
        price: 39.99,
        description: "A durable, non-slip yoga mat made from recycled materials, designed for comfort during workouts.",
        category: "Fitness & Outdoor",
        creatorId: 2,
        id: 14
    },
    {
        name: "Camping Tent for 4 People",
        price: 199.99,
        description: "A waterproof, easy-to-assemble camping tent that accommodates up to four people for a comfortable outdoor adventure.",
        category: "Fitness & Outdoor",
        creatorId: 4,
        id: 15
    },
    {
        name: "Fitness Tracker Watch",
        price: 89.99,
        description: "A fitness tracker with heart rate monitoring, sleep tracking, step count, and syncs with your smartphone.",
        category: "Fitness & Outdoor",
        creatorId: 3,
        id: 16
    },

    // Books & Stationery
    {
        name: "Leather-Bound Journal",
        price: 39.99,
        description: "A premium, handmade leather journal with 200 pages of acid-free paper, ideal for writing and sketching.",
        category: "Books & Stationery",
        creatorId: 6,
        id: 17
    },
    {
        name: "Fiction Bestseller: 'The Last Horizon'",
        price: 19.99,
        description: "A thrilling science fiction novel about space exploration and human survival in a distant galaxy.",
        category: "Books & Stationery",
        creatorId: 5,
        id: 18

    },
    {
        name: "Watercolor Brush Pens Set",
        price: 29.99,
        description: "A set of 12 vibrant watercolor brush pens, perfect for artists and creatives who love blending colors.",
        category: "Books & Stationery",
        creatorId: 5,
        id: 19
    },
    {
        name: "Vintage Fountain Pen",
        price: 49.99,
        description: "A finely crafted fountain pen with a sleek, timeless design and smooth ink flow, perfect for writers and collectors.",
        category: "Books & Stationery",
        creatorId: 2,
        id: 20
    }
];

console.log(items);


export { items, users }
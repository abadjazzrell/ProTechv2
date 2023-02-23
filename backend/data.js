import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Basir",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: "1",
      name: "Nike Slim Shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "High Quality Shirts",
      isActive: true,
    },
    {
      //_id: "2",
      name: "Addidas Fit Shirt",
      slug: "addidas-fit-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 120,
      countInStock: 10,
      brand: "Addidas",
      rating: 4.5,
      numReviews: 10,
      description: "High Quality Shirts",
      isActive: true,
    },
    {
      //_id: "3",
      name: "Nike Slim Pants",
      slug: "nike-slim-Pants",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "High Quality Pants",
      isActive: true,
    },
    {
      //_id: "4",
      name: "Addidas Fit Pants",
      slug: "addidas-fit-Pants",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 120,
      countInStock: 10,
      brand: "Addidas",
      rating: 4.5,
      numReviews: 10,
      description: "High Quality Pants",
      isActive: true,
    },
  ],
};

export default data;

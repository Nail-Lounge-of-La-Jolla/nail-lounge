const db = require('./connection');
const { User, Service, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Manicure',
      image: "https://media.gettyimages.com/photos/women-getting-pedicures-picture-id181853082?s=612x612",
      description: "The Nail Lounge of La Jolla offers a variety of manicures to suit your needs. Whether you seek a simple shine or a complete pampering, there is a perfect manicure for you."
    },
    { name: 'Pedicure',
      image: "https://media.gettyimages.com/photos/women-getting-pedicures-picture-id181853082?s=612x612",
      description: "The Nail Lounge of La Jolla offers a variety of manicures to suit your needs. Whether you seek a simple shine or a complete pampering, there is a perfect manicure for you." 
    },
    { name: 'Waxing',
      image: "https://media.gettyimages.com/photos/women-getting-pedicures-picture-id181853082?s=612x612",
      description: "The Nail Lounge of La Jolla offers a variety of manicures to suit your needs. Whether you seek a simple shine or a complete pampering, there is a perfect manicure for you." 
    },
    { name: 'Kids Service',
      image: "https://media.gettyimages.com/photos/women-getting-pedicures-picture-id181853082?s=612x612",
      description: "The Nail Lounge of La Jolla offers a variety of manicures to suit your needs. Whether you seek a simple shine or a complete pampering, there is a perfect manicure for you." 
    },
    { name: 'Additional Services',
      image: "https://media.gettyimages.com/photos/women-getting-pedicures-picture-id181853082?s=612x612",
      description: "The Nail Lounge of La Jolla offers a variety of manicures to suit your needs. Whether you seek a simple shine or a complete pampering, there is a perfect manicure for you." 
    }
  ]);

  console.log('categories seeded');

  await Service.deleteMany();

  const services = await Service.insertMany([
    {
      name: 'Classic Manicure',
      price: 2.99,
      category: categories[0]._id
    },
    {
      name: 'Deluxe Manicure',
      price: 2.99,
      category: categories[0]._id
    },
    {
      name: 'The Lounge Manicure',
      price: 2.99,
      category: categories[0]._id
    },
    {
      name: 'Paraffin Treatment',
      price: 2.99,
      category: categories[0]._id
    },
    {
      name: 'Natural Shine',
      price: 2.99,
      category: categories[0]._id
    },
    {
      name: 'Hot Oil Treatment',
      price: 2.99,
      category: categories[0]._id
    },
    {
      name: 'French Polish',
      price: 2.99,
      category: categories[0]._id
    },
    {
      name: 'Classic Spa Pedicure',
      price: 2.99,
      category: categories[1]._id
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});

const db = require('./connection');
const { User, Service, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Manicure',
      image: "https://blog.classpass.com/wp-content/uploads/2021/03/Spa-Manicure-ClassPass-scaled.jpg",
      description: "The Nail Lounge of La Jolla offers a variety of manicures to suit your needs. Whether you seek a simple shine or a complete pampering, there is a perfect manicure for you."
    },
    { name: 'Pedicure',
      image: "https://facesspa.com/wp-content/uploads/2020/05/AdobeStock_56635333.jpeg",
      description: "The Nail Lounge of La Jolla offers a variety of pedicures to suit your needs. Whether you seek a simple shine or a complete pampering, there is a perfect pedicure for you." 
    },
    { name: 'Waxing',
      image: "https://media.istockphoto.com/photos/man-getting-waxing-hair-removal-at-the-salon-picture-id1262600694?k=20&m=1262600694&s=612x612&w=0&h=-NdXspmTBK7hv1HlvnFUREvYhSLOfOpwyCAxv5ayRss=",
      description: "The Nail Lounge of La Jolla offers waxing for all over your body in the least painless way as possible (there may be slight pain)."
    },
    { name: 'Kids Service',
      image: "https://media.istockphoto.com/photos/mother-and-daughter-doing-manicure-picture-id541291082?k=20&m=541291082&s=612x612&w=0&h=6rEogg5w0bU1bCw6Iuu4bQOtnqPSxXtDuz7Z8qwCJRc=",
      description: "The Nail Lounge of La Jolla offers a variety of manicures and pedicures for your children!" 
    },
    { name: 'Additional Services',
      image: "https://media.istockphoto.com/photos/blue-pink-manicure-picture-id528708841?k=20&m=528708841&s=612x612&w=0&h=JFRszVydesjJRHTLVMTduIyCq1h9Ey-hGbjf5lMgX2c=",
      description: "The Nail Lounge of La Jolla offers a variety of additional services to make your manicures and pedicures look even better!"
    },
  ]);

  console.log('categories seeded');

  await Service.deleteMany();

  const services = await Service.insertMany([
    {
      name: 'Classic Manicure',
      price: 18.99,
      category: categories[0]._id
    },
    {
      name: 'Deluxe Manicure',
      price: 22.99,
      category: categories[0]._id
    },
    {
      name: 'The Lounge Manicure',
      price: 28.99,
      category: categories[0]._id
    },
    {
      name: 'Gel Manicure',
      price: 38.99,
      category: categories[0]._id
    },
    {
      name: 'Classic Pedicure',
      price: 29.99,
      category: categories[1]._id
    },
    {
      name: 'Deluxe Spa Pedicure',
      price: 37.99,
      category: categories[1]._id
    },
    {
      name: 'The Lounge Spa Pedicure',
      price: 48.99,
      category: categories[1]._id
    },
    {
      name: 'Gel Pedicure',
      price: 47.99,
      category: categories[1]._id
    },
    {
      name: 'On The Rock Pedicure',
      price: 59.99,
      category: categories[1]._id
    },
    {
      name: 'The "Volcano" Pedicure',
      price: 70.99,
      category: categories[1]._id
    },
    {
      name: 'Eyebrows',
      price: 13.99,
      category: categories[2]._id
    },
    {
      name: 'Upper Lip',
      price: 9.99,
      category: categories[2]._id
    },
    {
      name: 'Chin',
      price: 12.99,
      category: categories[2]._id
    },
    {
      name: 'Chin and Neck',
      price: 14.99,
      category: categories[2]._id
    },
    {
      name: 'Sideburns',
      price: 16.99,
      category: categories[2]._id
    },
    {
      name: 'Full Face',
      price: 44.99,
      category: categories[2]._id
    },
    {
      name: 'Underarm',
      price: 17.99,
      category: categories[2]._id
    },
    {
      name: 'Half Arm',
      price: 31.99,
      category: categories[2]._id
    },
    {
      name: 'Full Arm',
      price: 39.99,
      category: categories[2]._id
    },
    {
      name: 'Half Leg',
      price: 36.99,
      category: categories[2]._id
    },
    {
      name: 'Full Leg',
      price: 54.99,
      category: categories[2]._id
    },
    {
      name: 'Bikini',
      price: 34.99,
      category: categories[2]._id
    },
    {
      name: 'Brazilian',
      price: 44.99,
      category: categories[2]._id
    },
    {
      name: 'Back',
      price: 44.99,
      category: categories[2]._id
    },
    {
      name: 'Manicure',
      price: 12.99,
      category: categories[3]._id
    },
    {
      name: 'Gel Manicure',
      price: 25.99,
      category: categories[3]._id
    },
    {
      name: 'Polish Hands',
      price: 7.99,
      category: categories[3]._id
    },
    {
      name: 'Gel Pedicure',
      price: 34.99,
      category: categories[3]._id
    },
    {
      name: 'Polish Toes',
      price: 7.99,
      category: categories[3]._id
    },
    {
      name: 'Manicure & Pedicure',
      price: 31.99,
      category: categories[3]._id
    },
    {
      name: 'French Polish',
      price: 5.99,
      category: categories[4]._id
    },
    {
      name: '2 Designs',
      price: 4.99,
      category: categories[4]._id
    },
    {
      name: 'Hand or Feet Paraffin',
      price: 8.99,
      category: categories[4]._id
    },
    {
      name: 'Organic Minty Lemon Scrub',
      price: 5.99,
      category: categories[4]._id
    },
    {
      name: 'Nail Repair (Per Nail)',
      price: 4.99,
      category: categories[4]._id
    },
    {
      name: 'Take Off Acrylic',
      price: 11.99,
      category: categories[4]._id
    },
    {
      name: '15 Minute Neck/Shoulder/Feet Massage',
      price: 14.99,
      category: categories[4]._id
    },
    {
      name: 'Polish Change For Hands Or Feet',
      price: 9.99,
      category: categories[4]._id
    },
    {
      name: 'Gel Polish Change For Hands or Feet',
      price: 30.99,
      category: categories[4]._id
    },
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

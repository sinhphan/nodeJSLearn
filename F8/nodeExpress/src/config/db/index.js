const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://Cluster77742:SVxTVnlRV0pj@cluster77742.1n42d0c.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log('connected');
  } catch (error) {
    console.log('connect fail');
  }
}

module.exports = { connect };

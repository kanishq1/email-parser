const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect(
    process.env.MONGO_URL ||
      'mongodb+srv://node:kanishq12@cluster0.0emlg.mongodb.net/emailparser?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log('Successfully connected to the MONGODB');
  })
  .catch((err) => {
    console.log('Could not connect to the MONGODB. Exiting now...', err);
    process.exit();
  });

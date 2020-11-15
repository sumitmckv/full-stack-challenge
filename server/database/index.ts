import mongoose from 'mongoose';

export default class DataBase {
  database?: mongoose.Connection;

  connect(): void {
    if (this.database) {
      return;
    }
    mongoose
      .connect(process.env.MONGO_URI as string, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => console.log('Connected to the DB'))
      .catch((error) => console.log('DB Connection failed', error));
  }

  disconnect(): void {
    if (!this.database) {
      return;
    }
    mongoose.disconnect();
  }
}

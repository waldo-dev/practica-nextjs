const mongoose = require("mongoose");

const conn = {
    isConnected: false
} 

export async function connectDB () {
  try {
      if(conn.isConnected) return
    conn.isConnected = await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexion con la base de datos establecida");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

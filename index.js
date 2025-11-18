const mongoose = require("mongoose");
const { DB_USER, DB_PASSWORD, DB_HOST } = require("./constante");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("✅ Conexión exitosa a la base de datos MongoDB");
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error);
  }
};

connectDB();

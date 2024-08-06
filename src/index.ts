import "reflect-metadata";
import express from "express";
import sequelize from "./config/db";
import router from "./routes/Router";



const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use('/api', router);

// iniciamos el servidor
const startServer = async () => {
  try {
    await sequelize.authenticate(); //autenticamos si la conexion se establecio
    console.log("Connected to the database successfully");
    await sequelize.sync();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error starting server:", error);
    throw new Error("Error starting");
  }
};

startServer(); 
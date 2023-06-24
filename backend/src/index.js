import dotenv from "dotenv";
import app from "./app";

// dotEnv config
dotenv.config();

// env variables
const PORT = process.env.PORT || 8100;

app.listen(PORT, () => console.log("listening to port " + PORT));

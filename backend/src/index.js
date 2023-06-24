import app from "./app.js";

// env variables
const PORT = process.env.PORT || 8100;

app.listen(PORT, () => console.log("listening to port " + PORT));

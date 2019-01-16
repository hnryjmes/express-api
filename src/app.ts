import express = require("express");

// Our Express app config
const app = express();
app.set("port", process.env.PORT || 3000);

// API endpoints
app.get("/", (req: any, res) => {
  res.send("hello");
});

// export our app
export default app;

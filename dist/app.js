"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Our Express app config
const app = express();
app.set("port", process.env.PORT || 3000);
// API endpoints
app.get("/", (req, res) => {
    res.send("Hi");
});
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map
const express = require("express");
const app = express();
const router = express.Router();

// Middlewares setup
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// If we are in production, serve our clients build folder
// This folder is created during production only
if (process.env.NODE_ENV === "production") {
    app.use(express.static("public"));
}

router.use(function(req, res) {
  res.sendFile("./public/index.html");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
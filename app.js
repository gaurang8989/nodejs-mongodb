const express = require("express");
const app = express();

var corsOptions = { origin: "http://localhost:8081" };
// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get( "/", (req, res) => res.json({message: "Welcome to Jura'D Solutions"}));

// Mentioned all the Routes files app wise here (require()(app_name))
// require("./app/services/BlogService");
require("./app/routes/blog.routes")(app);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
}); 


module.exports = app;
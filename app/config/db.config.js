
const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://gaurang180410116123:Vora@8989@cluster0.j2wxkt5.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => { 
        if(err)
        { console.log(err);}
        else
        {console.log("Connected to MongoDB");}
     }
);
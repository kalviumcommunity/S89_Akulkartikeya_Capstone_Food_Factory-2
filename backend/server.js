const express  = require("express")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

const cookiRouter = require("./controllers/cookiRouter");
const doctorRouter = require("./controllers/doctorRouter");
const homeRouter = require("./controllers/homeRouter");
const recipesRouter = require("./controllers/recipesRouter");
const shoppingRouter = require("./controllers/shoppingRouter");


app.use("/cooki", cookiRouter);
app.use("/doctor", doctorRouter);
app.use("/home", homeRouter);
app.use("/recipes", recipesRouter);
app.use("/shopping", shoppingRouter);


app.get("/",(req,res)=>{
    res.send("this is backend")
})


app.listen(3000,async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Server connected successfully")
    } catch (error) {
        console.log("Something went wrong",error);
    }
})

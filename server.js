const express = require("express"); 
const cors = require("cors"); 
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

dotenv.config();


//user router
const eventsRouter = require("./routes/events.js");
const projectRouter = require("./routes/project.js");
const userRouter = require("./routes/user.js");
const authRouter = require("./routes/auth.js");
//const countDataRouter = require("./routes/countdata.js");



const MONGODB_URL = process.env.MONGODB_URL
const connectDatabase = () => {
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true        
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
    
}

const PORT = 5000;
connectDatabase();
//configuring app
const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());


app.use('/events', eventsRouter);
app.use('/project', projectRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);
//app.use('/data-count', countDataRouter);
app.listen(PORT, () => {
    console.log(`Server  is running on port  ${PORT}`)
})




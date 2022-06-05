const mongoose = require("mongoose");
const express = require("express");
const departRouter = require("./Router/department");
const logger = require("./middleware/loggers");

const DB_PASS = process.env.DB_PASS || "nero"

const NODE_ENV = process.env.NODE_ENV || "development"

const PORT = process.env.PORT || 27017
console.log(PORT)
const app = express();

// middlewares
const cors = require('cors')
var corsOptions = {
    origin: function(origin, callback) {
        // db.loadOrigins is an example call to load
        // a list of origins from a backing database
        db.loadOrigins(function(error, origins) {
            callback(error, origins)
        })
    }
}
app.use(cors())

// const cors = require('cors')
// const corsOptions = {
//     origin: 'http://localhost:4200',
//     optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions))

app.use(express.json())
if (NODE_ENV === "development")
    app.use(logger)

//routes(middleware with condition)
app.use("/departments", departRouter)

mongoose.connect(`mongodb+srv://nermin:${DB_PASS}@cluster0.eqxqi.mongodb.net/my_database?retryWrites=true&w=majority`,

        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(async() => {
        console.log("connected to mongodb");

        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`)
        })
    }).catch(console.error);
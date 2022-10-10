const Hapi = require("@hapi/hapi");
const dotenv = require("dotenv")
const mongoose = require("mongoose");

const tourRoutes = require("./routes/tourRoutes");
const userRoutes = require("./routes/userRoutes");


dotenv.config({ path: "./config.env" });

const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST
});

//Database
const DB = process.env.DATABASE;
mongoose.connect(DB, { useNewUrlParser: true })
.then(() => {console.log("DB connection successful!")})


const init = async () => {
    await server.start();

    server.route(tourRoutes);
    server.route(userRoutes);

    console.log("Server runing on port 8080...")
};

process.on("unhandledRejection", (err)=> {
    console.log(err);
    process.exit(1);
});

init();


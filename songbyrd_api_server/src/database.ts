import mongoose, { mongo } from "mongoose";

// Get credentials from env vars
const MLAB_USERNAME = process.env.MLAB_USERNAME;
const MLAB_PW = process.env.MLAB_PW;
const IN_DOCKER_COMPOSE = process.env.IN_DOCKER;

let DB_URL;

// rewrite db url if service is running in docker
if (IN_DOCKER_COMPOSE) {
    DB_URL = "mongodb://db/songbyrd_db";
} else {
    DB_URL = `mongodb://${MLAB_USERNAME}:${MLAB_PW}@ds163870.mlab.com:63870/warbler_ts_db`;
}

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
});

export default mongoose;

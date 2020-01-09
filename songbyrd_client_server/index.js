/**This is purely a means of serving a static React bundle.  It is a
 * temporary measure to ease containerization and allow application routing to be
 * handled by a reverse-proxy (nginx) running in a separate container.  The reverse-proxy
 * container could easily handle serving these static files, but I'm not yet sure
 * how to build the static files with docker-compose.
 */

require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT || 3000, () =>
    console.log(`running on ${PORT ? PORT : "3000--NO ENV VAR SUPPLIED!"}`)
);

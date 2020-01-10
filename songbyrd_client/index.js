/**This is purely a means of serving a static React bundle.  It is a
 * fallback measure in case there is an issue with serving the bundle from
 * nginx_proxy
 */

require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
    console.log("client route reached");
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT || 3000, () =>
    console.log(`running on ${PORT ? PORT : "3000--NO ENV VAR SUPPLIED!"}`)
);

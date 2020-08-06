/* const var to shortly call express when it's needed */
const express = require('express');
/* const var to server expressions use */
const server = express();
/* every '.use()' function its a server config settings */

/* config the static files for the server */
server.use(express.static("public"))

/* setting the route 'get', to return the second parameter */
/* 'req' is basically the info you are sending to the endpoint */ 
/* 'res' is the return of this endpoint */
/* '__dirname' is a node var which return the root path */


/* ROUTES CONFIG */
/* INDEX Page */
.get("/", (req, res) => {
    return res.sendFile(__dirname + "/views/index.html")
})
/* STUDY Page */
.get("/study", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html")
})
/* GIVE CLASSES Page */
.get("/give-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")
})
/* PORT CONFIG */
.listen(5500);
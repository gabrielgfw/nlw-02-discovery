// EXPRESS = Library of frameworks to run a properly server-side. //
// Nunjucks = Template Engine which allows us to manipulate our html easily. //

// Const var to shortly refer express when it's needed. //
const express = require('express');
// Const var to server expressions use. //
const server = express();
// Nunjucks configuration. //
// Basically we are refering which dir has the html that will be futher manipulated. //
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})
// Importing pages //
const { pageLanding, pageStudy, pageGiveClasses } = require('./pages')


// every '.use()' function its a server config settings //
// config the static files for the server (css, scripts, img) //
server.use(express.static("public"))

// ROUTES CONFIG (endpoints) //
// * INDEX Page //
.get("/", pageLanding)
// * STUDY Page //
.get("/study", pageStudy)
// * GIVE CLASSES Page //
.get("/give-classes", pageGiveClasses)
// PORT CONFIG //
.listen(5500);
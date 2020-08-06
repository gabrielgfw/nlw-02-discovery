/* EXPRESS = Library of frameworks to run a properly server. */
/* Nunjucks = Template Engine which allows us to manipulate a html easily * /

/* const var to shortly call express when it's needed */
const express = require('express');
/* const var to server expressions use */
const server = express();
/* nunjucks configuration */
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


const proffys = [
    { 
        name: "Gabriel Werner", 
        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGDtZsgpNXKyA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=yVdF_29MAo8hbXaMx88w51KhBPVvjkiw1pkduWTF7hU", 
        whatsapp: "98989-8989",
        bio: "Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    { 
        name: "Talita Maloqueira", 
        avatar: "https://scontent.ffln3-1.fna.fbcdn.net/v/t31.0-8/22104557_1079187802212482_1022377580596374535_o.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=Sqd83QoyWPwAX9Q1e6M&_nc_ht=scontent.ffln3-1.fna&oh=b435f170ab3fac373957c09a51494aa9&oe=5F522D45", 
        whatsapp: "98989-8989",
        bio: "Não sabe o que quer da vida direito, mas ta ai pra batalha.",
        subject: "Física",
        cost: "40",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]


/* setting the route 'get', to return the second parameter */
/* 'req' is basically the info you are sending to the endpoint */ 
/* 'res' is the return of this endpoint */

function pageLanding(req, res) {
    return res.render("index.html")
}
function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", {proffys, filters})
}
function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

/* every '.use()' function its a server config settings */
/* config the static files for the server (css, scripts, img) */
server.use(express.static("public"))
/* ROUTES CONFIG */
/* INDEX Page */
.get("/", pageLanding)
/* STUDY Page */
.get("/study", pageStudy)
/* GIVE CLASSES Page */
.get("/give-classes", pageGiveClasses)
/* PORT CONFIG */
.listen(5500);
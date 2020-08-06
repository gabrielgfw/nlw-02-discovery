/* const var to shortly call express when it's needed */
const express = require('express');
/* const var to server expressions use */
const server = express();
/* every '.use()' function its a server config settings */

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
        avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQGDtZsgpNXKyA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=yVdF_29MAo8hbXaMx88w51KhBPVvjkiw1pkduWTF7hU", 
        whatsapp: "98989-8989",
        bio: "Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "40",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]

/* ROUTES CONFIG */
/* setting the route 'get', to return the second parameter */
/* 'req' is basically the info you are sending to the endpoint */ 
/* 'res' is the return of this endpoint */
/* '__dirname' is a node var which return the root path */

function pageLanding(req, res) {
    return res.sendFile(__dirname + "/views/index.html")
}
function pageStudy(req, res) {
    return res.sendFile(__dirname + "/views/study.html")
}
function pageGiveClasses(req, res) {
    return res.sendFile(__dirname + "/views/give-classes.html")
}

/* config the static files for the server */
server.use(express.static("public"))
/* INDEX Page */
.get("/", pageLanding)
/* STUDY Page */
.get("/study", pageStudy)
/* GIVE CLASSES Page */
.get("/give-classes", pageGiveClasses)
/* PORT CONFIG */
.listen(5500);
require('express')()
/* setting the route 'get', to return the second parameter */
/* 'req' is basically the info you are sending to the endpoint */ 
/* 'res' is the return of this endpoint */
.get("/", (req, res) => {
    return res.send("Hi from NLW")
})
.get("/study", (req, res) => {
    return res.send("Página espelho")
})
.listen(5500)
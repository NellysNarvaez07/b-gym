const express = require("express");
const app = express();

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


var middleware = require('./middlewares');

const { controller } = require("./controller")

app.get("/", (req,res) => {
    res.send("Hola mundo");
})

// Rutas de autenticación y login
app.post('/signup', (req, res) => {
    controller.emailSignup(req, res)
});
app.post('/login', (req, res) => {
    controller.emailLogin(req, res)
});

app.get("/users", (req, res) => {
    controller.getUsers(res)
})

app.post("/usuario", middleware.ensureAuthenticated,  (req,res) => {
    let usuario = req.body;
    controller.setUsuario(usuario, res);
})

app.get("/calificaciones", middleware.ensureAuthenticated, (req,res) => {
    // let calificaciones = req.body;
    controller.getCalificaciones(res);

})

app.post("/calificaciones",middleware.ensureAuthenticated,  (req,res) => {
   let calificaciones = req.body
   controller.setCalificaciones( calificaciones, res);
})
app.get("/instructore", middleware.ensureAuthenticated,  (req,res) => {
    //let instructore = req.body;
    controller.getInstructore(res);
})

app.post("/instructore", middleware.ensureAuthenticated, (req,res) => {
    let instructore = req.body
    controller.getInstructore(instructore,res)
})
app.get("/cliente", (req,res) => {
controller.getCliente(res);

})

app.post("/cliente", (req,res) => {
     let cliente = req.body;
    controller.setCliente(cliente,res)

})


exports.app = app;
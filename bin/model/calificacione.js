const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CalificacioneSchema = new Schema({
    nombre1: String,
       nombre2: String,
       apellido1: String,
       apellido2: String,
       correo: String,
       cedula: String,
       metodo_enseñanza: String,
       recomendaciones: String,
       rutina: String,
id_instructores: [{type: Schema.Types.ObjectId,
                           ref:"instructores"}]
})

var Calificacione = mongoose.model("calificacione", CalificacioneSchema);
module.exports = Calificacione;
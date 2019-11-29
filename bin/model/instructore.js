const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstructoreSchema = new Schema({
    nombre1: String,
       nombre2: String,
       apellido1: String,
       apellido2: String,
       telefono: String,
       cedula: String,
       correo: String,
       sexo: String,
id_usuarios: [{type: Schema.Types.ObjectId,
                      ref:"usuarios"}]
                      })

var Instructores = mongoose.model("instructore", InstructoreSchema);
module.exports = Instructores;

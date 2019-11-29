       const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({

       nombre1: String,
       nombre2: String,
       apellido1: String,
       apellido2: String,
       cedula: String,
       correo: String,
       teléfono: String,
       peso_inicial: String,
       peso_final: String,
       fecha_inicial: String,
       fecha_final: String,
id_usuarios: [{ type: Schema.Types.ObjectId,
                    ref:"usuarios"}]

})

var Cliente = mongoose.model("cliente", ClienteSchema);
module.exports = Cliente;
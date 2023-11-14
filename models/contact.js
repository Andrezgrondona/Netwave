// const { Schema } = require("mongoose");
// import * as mongoose from 'mongoose';

import mongoose, {Schema}  from "mongoose";


const contacSchema = new Schema({
    fullname:{
        type:String,
        required:[true, "El nommbre es obligatorio"],
        trim:true,
        minLenght:[3, "El nombre debe tener mas de 3 caracteres"],
        maxLenght:[50, "El nombre debe tener menos de 50 caracteres"]
    },

    email:{
        type:String,
        required:[true, "El correo es obligatorio"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "El correo no es valido"],
    },

    message:{
        type:String,
        required:[true, "El mensaje es obligatorio"]
    },

    date:{
        type:Date,
        default:Date.now
    }


});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contacSchema);

export default Contact;